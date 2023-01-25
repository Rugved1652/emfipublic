import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import dynamic from "next/dynamic";
import {
  ReequestDemoTextEN,
  ReequestDemoTextES,
} from "../../constants/globalContent";
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
  const Router = useRouter();
  console.log(Router);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="">
        <Navbar />
      </div>
      {/* <canvas id="waves"></canvas> */}
      {/* <React.Suspense fallback={<></>}>
        <TestDemo />
      </React.Suspense> */}
      <div style={{ marginTop: "70px" }}>{children}</div>
      <Footer />
      {Router?.pathname !== "/[lang]/contact" ? (
        <Link
          href={`/${Router.query.lang}/contact`}
          className="contact-sticky-btn"
          id="request_demo_btn"
        >
          {Router.query.lang === "espanol"
            ? ReequestDemoTextES
            : ReequestDemoTextEN}
        </Link>
      ) : null}
    </div>
  );
}
