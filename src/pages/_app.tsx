import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/variable.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../Containers/DefaultLayout/DefaultLayout";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
