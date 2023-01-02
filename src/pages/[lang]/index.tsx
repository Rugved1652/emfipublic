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
  console.log("res", chartData);
  return (
    <main className="main">
      <SwiperCarousel
        SildeComponent={HeroSection}
        data={chartData?.data}
      ></SwiperCarousel>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  console.log("context", context);
  if (context.params.lang === "english") {
    const res = await fetchData("home?locale=en");
    console.log("raass", res);
    console.log("rssswss", res);
    return {
      props: {
        chartData: res,
      },
    };
  } else if (context.params.lang === "espanol") {
    const res = await fetchData("home?locale=es");
    return {
      props: {
        chartData: res,
      },
    };
  } else {
    const res = {
      data: "invalid url",
    };
    return {
      props: {
        chartData: res.data,
      },
    };
  }
};

export default index;
