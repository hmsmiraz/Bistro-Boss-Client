import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-dkvhd15ap-hmsmiraz.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SharedTitle
        subHeading={"What Our Client Say"}
        heading={"testimonials"}
      ></SharedTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center justify-center gap-6 px-32 py-12">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="text-4xl"><FaQuoteLeft></FaQuoteLeft></p>
              <p>{review.details}</p>
              <p className="text-4xl"><FaQuoteRight></FaQuoteRight></p>
              <h3 className="text-3xl text-orange-500 font-semibold">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
