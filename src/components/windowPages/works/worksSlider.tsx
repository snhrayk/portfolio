import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./worksSlider.css";

// ここに写真のURLを追加する
const images = [
  "../../../image/herstel.png",
  "../../../image/florita.png",
  "../../../image/faveTag.png",
  "../../../image/yurumetabi.png",
  "../../../image/CN-poster.png",
  "../../../image/nameCard.png",
];

function WorksSlider() {
  const sliderRef = useRef<Slider | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    customPaging: function (i: any) {
      return (
        <img src={images[i]} alt={`Slide ${i + 1}`} style={{ width: "100%" }} />
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // ここから下小さい画像をクリックするとその画像に真ん中に移動するアニメーション
    afterChange: (current: any) => {
      if (sliderContainerRef.current) {
        const dotContainer =
          sliderContainerRef.current.querySelector(".slick-dots");
        if (dotContainer) {
          const dots = dotContainer.children;
          if (dots.length > 0) {
            const activeDot = dots[current];
            activeDot.scrollIntoView({ behavior: "smooth", inline: "center" });
          }
        }
      }
    },
  };

  return (
    <div className="slider-container" ref={sliderContainerRef}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Slide ${index + 1}`} />
        ))}
      </Slider>
    </div>
  );
}

export default WorksSlider;
