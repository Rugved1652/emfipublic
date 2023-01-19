import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const Router = useRouter();
  console.log(Router);

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      {children}
      <Footer />
      {
        Router?.pathname !== "/[lang]/contact" ? 
        <Link href={`/${Router.query.lang}/contact`} className="contact-sticky-btn" id="request_demo_btn" >Request Demo</Link> : null
      }
    </>
  );
}
