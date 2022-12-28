import React, { ReactNode } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
}
