import Image from "next/image";
import Logo from "../../Assets/emfi-logo.svg";
// import LoginModal from "../LoginForm/LoginModal";
import styles from "../../styles/Navbar.module.scss";
import { useEffect, useState } from "react";
import { NavbarRoutes } from "../../constants/routes";
import Link from "next/link";
import Toggle from "../../Assets/toggle.png";
import CloseIcon from "../../Assets/close-icon.svg";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const LoginModal = dynamic(import("../../Components/LoginForm/LoginModal"), {
  suspense: true,
});

type Props = {};

const NavbarComponent = (props: Props) => {
  const [show, setshow] = useState(true);
  const [lang, setLang] = useState("english");

  const Router = useRouter();

  console.log(Router.query.lang, "router");

  useEffect(() => {}, []);

  return (
    <>
      <nav className={styles.navBar}>
        <div className="container-md">
          <div className={styles.navBarList}>
            <div className={styles.navBarBrand}>
              <Image
                className={styles.navBarBrandLogo}
                src={Logo}
                alt="logo"
                height={52}
              />
            </div>
            <ul
              className={
                show
                  ? styles.navBarMenu
                  : `${styles.navBarMenu} ${styles.mobileMenu} `
              }
            >
              {NavbarRoutes.map((i) => (
                <li key={i.key}>
                  <Link
                    className={styles.navBarMenuItem}
                    href={Router.query.lang === "espanol" ? i.es_path : i.path}
                  >
                    {Router.query.lang === "espanol" ? i.es_label : i.en_label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.navBarLoginForm}>
              <LoginModal />
            </div>
            {/* Toggle Button */}
            <button
              onClick={() => setshow((prev) => !prev)}
              className={styles.navBarToggleButton}
            >
              <Image
                className={show ? styles.ToggleImage : styles.CloseMenu}
                src={show ? Toggle : CloseIcon}
                alt={show ? "menu" : "cloase"}
                width={25}
                height={20}
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
