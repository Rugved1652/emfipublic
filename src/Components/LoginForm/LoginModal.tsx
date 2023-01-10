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
  const [lang, setLang] = useState("English");
  const router = useRouter();

  const handleLanguage = (lang: string) => {
    if (lang === "English") {
      setLang("Espanol");
      localStorage.setItem("locale", "Espanol");
      // router.push('')
    } else {
      setLang("English");
      localStorage.setItem("locale", "English");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const langValue = localStorage.getItem("locale");
      if (langValue) {
        setLang(langValue);
      } else {
        setLang("English");
        localStorage.setItem("locale", "English");
      }
    }
  }, []);

  return (
    <>
      <div className={styles.loginForm}>
        <span
          onClick={
            lang === "English"
              ? () => handleLanguage("English")
              : () => handleLanguage("Espanol")
          }
          className={styles.lanText}
        >
          {lang === "English" ? "Espanol" : "English"}
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
