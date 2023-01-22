import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
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
};

function index({ chartData }: Props) {
  return (
    <>
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
    return {
      props: {
        chartData: res || null,
      },
    };
  } else if (context.params.lang === "espanol") {
    const res = await fetchData("home?locale=es");
    return {
      props: {
        chartData: res || null,
      },
    };
  } else {
    const res = {
      data: "invalid url",
    };
    return {
      props: {
        chartData: res || null,
      },
    };
  }
};

export default index;
