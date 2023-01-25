import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/variable.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../Containers/DefaultLayout/DefaultLayout";
import { SSRProvider } from "react-bootstrap";
import React from "react";
import { useRouter } from "next/router";
 
export default function App({ Component, pageProps }: AppProps) {
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
      {loading ? (
        <>Loading</>
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
