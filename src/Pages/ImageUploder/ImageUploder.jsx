import React, { useState } from "react";
import Slider from "react-slick";
import "./ImageUploder.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageUploder = () => {
  const [files, setFiles] = useState([]);

  function handleChange(e) {
    const newFiles = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setFiles(newFiles);
  }
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    loop: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="text-center">
      <h2 className="h2">Add Image:</h2>
      <input type="file" className="inputFild" multiple accept="image" onChange={handleChange}/>
      <Slider {...settings}>
        {files.map((file, index) => (
          <div key={index}>
            <img className="upimg" src={file} alt={`${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageUploder;
