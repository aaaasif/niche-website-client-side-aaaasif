import React from "react";
import { Carousel } from "react-bootstrap";
import "./../assets/css/slider.css";
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src="https://i.ibb.co/VQsFVdy/william-daigneault-ye6-Skc38-IHs-unsplash.jpg" alt="Slider Img" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src="https://i.ibb.co/09GZHkC/william-bayreuther-OChqotw-BQNM-unsplash.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src="https://i.ibb.co/tBxwQQG/nicolas-luna-p-MFNnn-ODr-KA-unsplash.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src="https://i.ibb.co/7SPyvZW/christian-langenhan-y-K2-DTRl-b-Q-unsplash.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
