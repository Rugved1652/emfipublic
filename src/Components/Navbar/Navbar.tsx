import Image from "next/image";
import Logo from "../../assets/emfi-logo.svg";
import LoginModal from "../LoginForm/LoginModal";
import styles from "../../styles/Navbar.module.scss";
import { useState } from "react";
import { NavbarRoutes } from "../../constants/routes";
import Link from "next/link";
import Toggle from "../../assets/toggle.png";
import CloseIcon from "../../assets/close-icon.svg";

type Props = {};

const NavbarComponent = (props: Props) => {
  const [show, setshow] = useState(true);

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
                  <Link className={styles.navBarMenuItem} href={i.path}>
                    {i.en_label}
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
