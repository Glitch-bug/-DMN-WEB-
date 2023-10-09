import React, { useEffect } from "react";
import Swiper from "swiper";
// import 'swiper/css/swiper.css';
import { TweenMax } from "gsap";

const SwiperRight = () => {
  const interleaveOffset = 0.75;

  const sliderImages = [
    {
      id: 1,
      image: "https://html.nkdev.info/piroll/assets/images/home-6-1.jpg",
    },
    {
      id: 2,
      image: "https://html.nkdev.info/piroll/assets/images/home-6-2.jpg",
    },
    {
      id: 3,
      image: "https://html.nkdev.info/piroll/assets/images/home-6-3.jpg",
    },
    {
      id: 4,
      image: "https://html.nkdev.info/piroll/assets/images/home-6-4.jpg",
    },
  ];

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      speed: 800,
      mousewheelControl: true,
      watchSlidesProgress: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
        type: "bullets",
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + ("0" + (index + 1)) + "</span>"
          );
        },
      },
      on: {
        progress: function () {
          let swiper = this;

          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress;
            let innerOffset = swiper.height * interleaveOffset;
            let innerTranslate = slideProgress * innerOffset;

            TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
              y: innerTranslate,
            });
          }
        },
        setTransition: function (slider, speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
      },
    });
  }, []);

  return (
    <div>
      <div className="swiper-container">
        <div className="slider swiper-wrapper">
          {sliderImages.map((item, index) => {
            return (
              <div key={index} className="swiper-slide">
                <div className="slide-inner">
                  <img src={item.image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SwiperRight;
