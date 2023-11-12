import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import { Pagination } from "swiper/modules";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-20"
    >
      <SwiperSlide>
        <img src={slide1} alt="" className="relative" />
        <h3 className="absolute text-4xl uppercase text-center text-white font-bold -mt-16 ml-20">
          Salad
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-4xl uppercase text-center text-white font-bold -mt-16">
          Pizza
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-4xl uppercase text-center  text-white font-bold -mt-16">
          Soup
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-4xl uppercase text-center  text-white font-bold -mt-16">
          Cake
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" className="relative" />
        <h3 className="absolute text-4xl uppercase text-center text-white font-bold -mt-16 ml-20">
          Salads
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
