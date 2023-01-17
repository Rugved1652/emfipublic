import React, { useRef, useState, useEffect } from "react";
import { useOnClickOutside } from "../../hooks/useOnclickOutSide";
import LoginIcon from "../Icons/LoginIcon";
import FloatModal from "../FloatModal/FloatModal";
import styles from "../../styles/LoginForm.module.scss";
import Router, { useRouter } from "next/router";

type Props = {};

function LoginModal({}: Props) {
  const [loginModal, setLoginModal] = useState(false);
  const buttonref = useRef<any>(null);
  const refinst = useRef<any>();
  useOnClickOutside(refinst, () => {
    setLoginModal(false);
    setfill(false);
  });
  const [fill, setfill] = useState(false);
  const [lang, setLang] = useState("english");
  const router = useRouter();
  const handleLanguage = (lang: string) => {
    if (lang === "english") {
      setLang("espanol");
      localStorage.setItem("locale", "espanol");
      console.log("router", router.pathname.replace("[lang]", "espanol"));
      router.push(`/${router.pathname.replace("[lang]", "espanol")}`);
    } else {
      setLang("english");
      localStorage.setItem("locale", "english");
      console.log("router", router.pathname.replace("[lang]", "english"));
      router.push(`/${router.pathname.replace("[lang]", "english")}`);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const langValue = localStorage.getItem("locale");
      if (langValue) {
        setLang(langValue);
      } else {
        setLang("english");
        localStorage.setItem("locale", "english");
      }
    }
  }, []);

  return (
    <>
      <div className={styles.loginForm}>
        <span
          onClick={
            lang === "english"
              ? () => handleLanguage("english")
              : () => handleLanguage("espanol")
          }
          className={styles.lanText}
        >
          {lang === "english" ? "Espanol" : "english"}
        </span>

        <div
          className={styles.loginFormButton}
          onMouseEnter={() => {
            setLoginModal(true);
            setfill(true);
          }}
        >
          <div className={styles.loginFormButton}>
            <a
              className={fill ? styles.loginButton : styles.loginButtonActive}
              href="#"
            >
              <LoginIcon fill={fill} />
            </a>
            <FloatModal reft={buttonref} show={loginModal}>
              <div ref={refinst} className={styles.form}>
                <input placeholder="Email" />
                <input placeholder="Password" />
                <button>Next</button>
                <a>Forget Password ?</a>
              </div>
            </FloatModal>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
