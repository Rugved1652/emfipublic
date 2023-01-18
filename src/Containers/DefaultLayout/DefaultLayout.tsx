import Script from "next/script";
import React, { ReactNode } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import dynamic from "next/dynamic";
// import TestDemo from "../../Components/AnimatedComponent/TestDemo.jsx";
const TestDemo = dynamic(
  import("../../Components/AnimatedComponent/TestDemo.jsx"),
  {
    suspense: true,
  }
);
type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="">
        <Script src="../../WaveScript/index.js"></Script> <Navbar />
      </div>
      <canvas id="waves"></canvas>
      {/* <React.Suspense fallback={<></>}>
        <TestDemo />
      </React.Suspense> */}
      {children}
      <Footer />
    </>
  );
}
