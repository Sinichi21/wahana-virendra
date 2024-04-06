import Image from "next/image";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/ReviewCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Panggil SwiperCore.use di luar komponen Slide
SwiperCore.use([Pagination, Autoplay, Navigation]);

export default function Slide() {
  return (
    <div className="w-[1200px] h-[300px] mx-auto mt-[77.89px]">
      <div className="flex w-[800px] h-[41px] font-roboto font-semibold text-[32px] mb-[24px] items-center">
        <Image className="mr-[16px]" src={"/assets/LandingPage/cust.svg"} alt="customer" width={41} height={41} />
        <h1>Our Customer Feedback</h1>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        // navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Card
            image="/assets/Card/review1.svg"
            name="Flyod Miles"
            rating={5}
            review="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
      Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card image="/assets/Card/review2.svg" name="Ronald Richards" rating={4} review="ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/assets/Card/review3.svg"
            name="Savannah Nguyen"
            rating={3.5}
            review="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/assets/Card/review1.svg"
            name="Flyod Miles"
            rating={5}
            review="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
      Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card image="/assets/Card/review2.svg" name="Ronald Richards" rating={4} review="ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            image="/assets/Card/review3.svg"
            name="Savannah Nguyen"
            rating={3.5}
            review="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
