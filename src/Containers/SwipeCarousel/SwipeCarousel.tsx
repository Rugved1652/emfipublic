import HeroSection from "../../Components/HeroSection/HeroSection";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper";

type Props = {
  SildeComponent: any;
  data?: any;
  children?: any;
  className?: string;
};

const SwiperCarousel = ({
  children,
  data,
  SildeComponent,
  className = "",
}: Props) => {
  return (
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
      autoplay={false}
      // {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }
      
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
      {data?.map((i: any) => (
        <SwiperSlide className="min-vh-100 d-flex justify-content-center align-align-items-center">
          <SildeComponent data={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
