import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";

// import "swiper/css";
import "swiper/css/bundle";

import WhyJoinDecagon from "./WhyJoinDecagon";
import learn_decagon from "./Carousel Images/learn_decagon.svg";
import learn_icon from "./Carousel Images/learn_icon.svg";
import connect_decagon from "./Carousel Images/connect_decagon.svg";
import connect_icon from "./Carousel Images/connect_icon.svg";
import discover_decagon from "./Carousel Images/discover_decagon.svg";
import discover_icon from "./Carousel Images/discover_icon.svg";


import { useState, useEffect } from "react";

export default function WhyJoin() {
  const [stretchValue, setStretchValue] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      setStretchValue(window.innerWidth > 1024 ? 300 : 100);
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col items-center">
      <h2 className="flex items-center font-semibold text-[28px] md:text-[40px] tracking-tight mb-16">
        <hr className="block w-2 h-10 bg-orange-300 mr-4" />
        Why Join?
      </h2>

      {/* Decagon Carousel*/}
      <div className="w-full h-[270px] md:h-[450px]">
        <Swiper
          modules={[Navigation, Pagination, A11y, Keyboard, EffectCoverflow]}
          slidesPerView={2}
          initialSlide={1}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: stretchValue,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          keyboard={true}
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <WhyJoinDecagon
                BackgroundImage={learn_decagon}
                IconImage={learn_icon}
                TitleText="Learn"
                SubtitleText="from world-renowned experts"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <WhyJoinDecagon
                BackgroundImage={connect_decagon}
                IconImage={connect_icon}
                TitleText="Connect"
                SubtitleText="with like-minded individuals"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <WhyJoinDecagon
                BackgroundImage={discover_decagon}
                IconImage={discover_icon}
                TitleText="Discover"
                SubtitleText="opportunities with companies"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col items-center mt-16">
        <p className="md:text-[24px] text-center">
          Be a part of our 2024 event this January!
        </p>
        <p className="font-semibold text-[20px] md:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot w-fit">
          Register Now⬇
        </p>
        <Link
          className={`drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-royalBlue hover:bg-goldenApricot mx-auto px-5 md:px-10 py-1 mt-3 md:mt-6 text-center rounded-full uppercase md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:text-white`}
          href={`/`}
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
}
