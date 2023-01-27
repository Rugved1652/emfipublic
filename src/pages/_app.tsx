import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/variable.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../Containers/DefaultLayout/DefaultLayout";
import { SSRProvider } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SwitchOn from "../Components/SwitchOn";
import Navbar from "../Components/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const [isSwitchOn, setisSwitchOn] = useState(true);
  useEffect(() => {
    const switchCheck = localStorage.getItem("cookies");
    if (switchCheck === "true") {
      setisSwitchOn(false);
    }
  }, []);

  const Router = useRouter();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {isSwitchOn ? <SwitchOn setisSwitchOn={setisSwitchOn} /> : null}
      {loading ? (
        <>
          <Navbar />
          <div
            style={{ minHeight: "100vh" }}
            className="loading-main full-page"
          >
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </>
      ) : (
        <SSRProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SSRProvider>
      )}
    </>
  );
}
