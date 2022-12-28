import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnclickOutSide";
import LoginIcon from "../Icons/LoginIcon";
import FloatModal from "../FloatModal/FloatModal";
import styles from "../../styles/LoginForm.module.scss";

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

  return (
    <>
      <div className={styles.loginForm}>
        <a href="javascript:void(0);" className={styles.lanText}>
          Espanol
        </a>

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
