import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper";
import { useRouter } from "next/router";
import ParticalBg from "../../Components/ParticalBg/ParticalBg";

type Props = {
  SildeComponent: any;
  image?: string;
  data?: any[];
  children?: any;
  className?: string;
  page?: string;
  setImagePosition?: Function;
};

const SwiperCarousel = ({
  image,
  data,
  SildeComponent,
  className = "",
  page,
  setImagePosition = () => {},
}: Props) => {
  return (
    <div>
      <Swiper
        style={{ position: "relative" }}
        spaceBetween={50}
        slidesPerView={1}
        preventClicks={false}
        onRealIndexChange={
          page === "product"
            ? (swiper) => {
                swiper.realIndex === 3
                  ? setImagePosition(true)
                  : setImagePosition(false);
              }
            : () => {}
        }
        touchStartPreventDefault={false}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        speed={1}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        // autoplay={false}
        className={`vh-100 home-slider ${
          page === "aboutPage" ? "about-service-slider" : ""
        } ${page === "product" ? "about-service-slider" : ""} ${className}`}
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
          <SwiperSlide
            className={`min-vh-100 d-flex justify-content-center 
             ${page === "aboutPage" ? "align-items-center" : ""}
             ${page === "product" ? "align-items-start" : ""}  
             ${page === "home" ? "align-items-center" : ""}  
             ${page === "service" ? "align-items-center" : ""}  
             ${page === "aboutPage" && index === 0 ? "eSlideAboutFirst" : ""} 
             `}
          >
            <SildeComponent
              image={image}
              data={i}
              page={page}
              isProductHero={
                page === "product" && index === 0
                  ? true
                  : page === "product" && index !== 0
                  ? false
                  : null
              }
              isAbout={
                page === "aboutPage" && index === 0
                  ? true
                  : page === "aboutPage" && index !== 0
                  ? false
                  : null
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {page === "aboutPage" || page === "product" ? <ParticalBg /> : null}
    </div>
  );
};

export default SwiperCarousel;
