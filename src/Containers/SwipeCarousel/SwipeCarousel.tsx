import HeroSection from "../../Components/HeroSection/HeroSection";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ParticalBg from "../../Components/ParticalBg/ParticalBg";
const AnimationComponent = dynamic(
  () => import("../../Components/AnimatedComponent/AnimatedComponent"),
  {
    suspense: true,
  }
);

type Props = {
  SildeComponent: any;
  data?: any;
  children?: any;
  className?: string;
  page?: string;
};

const SwiperCarousel = ({
  children,
  data,
  SildeComponent,
  className = "",
  page,
}: Props) => {
  const router = useRouter();

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        preventClicks={false}
        touchStartPreventDefault={false}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        // speed={1}
        // autoplay={{
        //   delay: 10500,
        //   disableOnInteraction: false,
        // }}
        autoplay={false}
        className={`vh-100 home-slider ${className}`}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 8,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '"><img class="pagination-bullet"/></span>'
            );
          },
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
      >
        {data?.map((i: any, index: number) => (
          <SwiperSlide className="min-vh-100 d-flex justify-content-center align-align-items-center">
            <SildeComponent
              data={i}
              isProductHero={page === "product" && index === 0 ? true : null}
              isAbout={page === "aboutPage" && index === 0 ? true : false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ParticalBg />
      {router.route === "/[lang]" ? null : null}
    </>
  );
};

export default SwiperCarousel;
