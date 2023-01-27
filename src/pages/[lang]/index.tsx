import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";

const SwiperCarousel = dynamic(
  () => import("../../Containers/SwipeCarousel/SwipeCarousel"),
  {
    suspense: true,
  }
);
import { fetchData } from "../../Services/apiFunction";

type Props = {
  chartData: any;
  metaData: any;
};

function index({ chartData, metaData }: Props) {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
      </Head>
      <main className="main homePage">
        <SwiperCarousel
          page="home"
          SildeComponent={HeroSection}
          data={chartData?.data}
        ></SwiperCarousel>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  if (context.params.lang === "english") {
    const res = await fetchData("home?locale=en");
    const metaData = {
      title: "EMFI | Home",
    };
    return {
      props: {
        chartData: res || null,
        metaData: metaData,
      },
    };
  } else if (context.params.lang === "espanol") {
    const res = await fetchData("home?locale=es");
    const metaData = {
      title: "EMFI | Inicio",
    };
    return {
      props: {
        chartData: res || null,
        metaData: metaData,
      },
    };
  } else {
    const res = {
      data: "invalid url",
    };
    const metaData = {
      title: "EMFI",
    };
    return {
      props: {
        chartData: res || null,
        metaData: metaData,
      },
    };
  }
};

export default index;
