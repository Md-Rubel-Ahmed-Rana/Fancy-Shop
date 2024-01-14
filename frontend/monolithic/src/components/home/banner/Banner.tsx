/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Banner = () => {
  const products = [
    {
      id: 1,
      name: "Stylish Sunglasses",
      image: "https://i.ibb.co/CWny48v/sun-glasses.jpg",
      description:
        "Protect your eyes with our trendy and high-quality sunglasses. Stay fashionable under the sun!",
    },
    {
      id: 2,
      name: "Comfortable T-Shirt",
      image: "https://i.ibb.co/wCw0wpT/t-shirt.jpg",
      description:
        "Experience ultimate comfort with our soft and stylish T-shirts. Perfect for casual and everyday wear.",
    },
    {
      id: 3,
      name: "Classic Denim Pant",
      image: "https://i.ibb.co/pxfbGtF/jeans-pant.jpg",
      description:
        "Upgrade your wardrobe with our classic denim pants. Timeless style meets modern comfort.",
    },
    {
      id: 4,
      name: "Elegant Watch",
      image: "https://i.ibb.co/DGmXyym/watch.jpg",
      description:
        "Make a statement with our elegant watches. Precision timekeeping meets sophisticated design.",
    },
  ];

  const [swiper, setSwiper] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const onSwiperReady = (swiper: any) => {
    setSwiper(swiper);
    swiper.slideTo(currentIndex, 0); // Set the initial slide
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [swiper]);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => {}}
      onSwiper={onSwiperReady}
      loop={true}
      loopAdditionalSlides={1}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="relative flex justify-center">
            <img
              style={{ height: "500px", width: "100%" }}
              src={product.image}
              alt=""
            />
            <div className=" text-white text-center absolute top-20 right-64">
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg">{product.description}</p>
            </div>
            <button
              onClick={handlePrev}
              className="absolute left-2 bottom-1/2 bg-gray-400 px-2 py-4"
            >
              <SlArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 bottom-1/2 bg-gray-400 px-2 py-4"
            >
              <SlArrowRight />
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
