import React from "react";
import Slider from "react-slick";

const Watches = (props) => {
  let item = props.watchItem;
  console.log(item);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {item.map((ele, i) => {
        return (
          <div className="bg-[#0000001c] text-center">
            <img src={ele.thumbnail} alt="" />
            <h1 className="lg:text-xl md:text-lg sm:text-sm text-white font-serif ">{ele.title}</h1>
            <h1 className="text-white">${ele.price}</h1>
          </div>
        );
      })}
    </Slider>
  );
};

export default Watches;
