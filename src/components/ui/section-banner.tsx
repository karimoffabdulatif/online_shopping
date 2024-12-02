"use client";
import Image from "next/image";
import Banner1 from "../../../public/banner1.jpg";
import Banner2 from "../../../public/banner2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Index: React.FC = () => {
  return (
    <div className="mx-auto px-2 container lg:mx-auto pb-[40px] lg:mt-[20px]">
      <div className="mb-[-130px] lg:w-full h-[350px] mt-[50px] lg:mb-[80px] md:h-[300px] sm:h-[250px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={false}
          className="myBanner shadow-2xl"
        >
          <SwiperSlide>
            <div className="rounded-lg lg:rounded-[15px] overflow-hidden">
              <Image 
                src={Banner1} 
                alt="Banner 1" 
                className="w-[1265px] object-cover sm:h-[200px] md:h-[250px] lg:h-[350px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-lg lg:rounded-[15px] overflow-hidden">
              <Image 
                src={Banner2}
                alt="Banner 2" 
                className="w-[1265px] object-cover sm:h-[200px] md:h-[250px] lg:h-[350px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Index;
