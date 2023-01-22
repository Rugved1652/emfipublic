import React, { useRef, useState, useEffect } from "react";
import { useOnClickOutside } from "../../hooks/useOnclickOutSide";
import LoginIcon from "../Icons/LoginIcon";
import FloatModal from "../FloatModal/FloatModal";
import styles from "../../styles/LoginForm.module.scss";
import { useRouter } from "next/router";
import OtpInput from "react18-input-otp";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { postDataV2 } from "../../Services/apiFunction";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

type Props = {};

function LoginModal({}: Props) {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required("Email Required"),
    password: yup.string().required("Email Required"),
  });
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [waitAuth, setWaitAuth] = useState(false);
  const [waitOTP, setWaitOTP] = useState(false);

  const [middledata, setMiddleData] = useState<any>();
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState(0);
  const [checkAuthApp, setCheckAuthApp] = useState("0");
  const [checkAuthOTP, setCheckAuthOTP] = useState("");

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
      console.log("router", router.asPath.replace("[lang]", "espanol"));
      router.push(`/${router.asPath.replace("english", "espanol")}`);
    } else {
      setLang("english");
      localStorage.setItem("locale", "english");
      console.log("router", router.asPath.replace("espanol", "english"));
      router.push(`/${router.asPath.replace("espanol", "english")}`);
    }
  };

  const notifyError = (message: string) =>
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifySuccess = (message: string) =>
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const mobileAuthConfirmation = async (data: any) => {
    console.log("MobileAuth");
    const MobileAuthConfirm = new FormData();
    MobileAuthConfirm.append("email", data.email);
    MobileAuthConfirm.append("password", data.password);
    MobileAuthConfirm.append("check_auth_app", "1");
    MobileAuthConfirm.append("check_auth_otp", "0");
    const res = await postDataV2("/user_login", MobileAuthConfirm);
    if (res.data?.auth_status === 2) {
      router.push(res.data?.to);
      console.log("ss");
    }
    if (res.data?.auth_status === 3) {
      notifyError(res.data?.msg);
      console.log("ss");
      if (waitRes) {
        clearInterval(waitRes);
      }
      setWaitAuth(false);
    }
  };

  const verifyOTP = async (data: any) => {
    const verifyOTPForm = new FormData();
    verifyOTPForm.append("email", data.email);
    verifyOTPForm.append("password", data.password);
    verifyOTPForm.append("check_auth_app", "4");
    verifyOTPForm.append("check_auth_otp", checkAuthOTP);
    const res = await postDataV2("/user_login", verifyOTPForm);
    if (res.data?.auth_status === 1) {
      router.push(res.data?.to);
      console.log("ss");
    }
    if (res.data?.status === 0) {
    }
  };
  const sendOTP = async (data: any) => {
    if (waitRes) {
      clearInterval(waitRes);
    }
    setWaitAuth(false);
    const sendOTPForm = new FormData();
    sendOTPForm.append("email", data.email);
    sendOTPForm.append("password", data.password);
    sendOTPForm.append("check_auth_app", "3");
    sendOTPForm.append("check_auth_otp", "0");
    const res = await postDataV2("/user_login", sendOTPForm);
    if (res.data?.otp_status === 1) {
      setWaitOTP(true);
    }
  };

  const formSubmit = async (data: any) => {
    console.log(data);

    const LoginForm = new FormData();
    LoginForm.append("email", data.email);
    LoginForm.append("password", data.password);
    LoginForm.append("check_auth_app", "0");
    LoginForm.append("check_auth_otp", "0");
    const res = await postDataV2("/user_login", LoginForm);
    console.log("res", res.data);
    if (res.data?.auth_status === 1) {
      router.push(res.data?.to);
      console.log("ss");
    }
    if (res?.data?.wait_auth === 1) {
      console.log("res", res);
      setMiddleData(data);
      setWaitAuth(true);
    }
  };

  var waitRes: any;

  useEffect(() => {
    if (waitAuth) {
      waitRes = setInterval(mobileAuthConfirmation, 3000, middledata);
    }
    return () => {
      if (waitRes) {
        clearInterval(waitRes);
        setWaitAuth(false);
      }
    };
  }, [waitAuth]);

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

  const watchAllFields = watch();
  return (
    <>
      <ToastContainer />
      <div className={styles.loginForm}>
        <span
          onClick={
            lang === "english"
              ? () => handleLanguage("english")
              : () => handleLanguage("espanol")
          }
          className={styles.lanText}
        >
          {lang === "english" ? "Español" : "english"}
        </span>

        <div
          className={styles.loginFormButton}
          onMouseEnter={() => {
            setLoginModal(true);
            setfill(true);
          }}
        >
          <div className={styles.loginFormButton}>
            <Link
              className={fill ? styles.loginButton : styles.loginButtonActive}
              href="https://login.emfi.uk/"
            >
              <LoginIcon fill={fill} />
            </Link>
            <FloatModal reft={buttonref} show={loginModal}>
              <div ref={refinst} className={styles.form}>
                {!waitOTP ? (
                  <form onSubmit={handleSubmit(formSubmit)}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          maxWidth: "332px",
                          overflow: "hidden",
                          // gap: "16px",
                        }}
                      >
                        <div
                          className={email ? "change" : "back"}
                          style={{
                            display: "flex",
                            maxWidth: "300px",
                            transition: "all 0.8s ease-in-out",
                            // gap: "16px",
                          }}
                        >
                          <div>
                            <input
                              style={{ width: "300px" }}
                              {...register("email")}
                              placeholder="Email"
                            />

                            <a>Forget Password ?</a>
                          </div>
                          <div>
                            <span onClick={() => setEmail(0)}>Back</span>
                            <input
                              style={{ width: "300px" }}
                              {...register("password")}
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type={!email ? "button" : "submit"}
                        onClick={() => setEmail(1)}
                      >
                        {!email
                          ? `next`
                          : `  ${waitAuth ? "auth from mobile" : "submit"}`}
                      </button>
                      <span onClick={() => sendOTP(middledata)}>send OTP</span>
                      <span onClick={() => formSubmit(middledata)}>
                        resend Auth
                      </span>
                      <a>Forget Password ?</a>
                    </div>
                  </form>
                ) : (
                  <>
                    <span onClick={() => setWaitOTP(false)}>Back</span>
                    <OtpInput
                      value={checkAuthOTP}
                      onChange={setCheckAuthOTP}
                      numInputs={4}
                      separator={<span>{""}</span>}
                      separateAfter={3}
                      focusStyle={{
                        borderColor: "#00000",
                      }}
                      inputStyle={{
                        width: "54px",
                        height: "54px",
                        textAlign: "center",
                        padding: "5px",
                        margin: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "600",
                      }}
                    />
                    <button type="button" onClick={() => verifyOTP(middledata)}>
                      {" "}
                      Verify{" "}
                    </button>
                  </>
                )}
              </div>
            </FloatModal>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
