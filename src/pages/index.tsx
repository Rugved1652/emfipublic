import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import Background from "react-background-noise";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/english");
  }, []);

  return (
    <div className="vh-100">
      <Head>
        <title>EMFI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="../WaveScript/index.js"></Script>{" "}
      </Head>
      <canvas id="waves"></canvas>

      {/* <Background gridSize={32}>
        <div style={{ color: "white" }}>Hello World</div>
      </Background> */}
    </div>
  );
}
