import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
     <p>
  “Fresh flavors, chill atmosphere, and super friendly service.”
</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
          <p>
  “A cozy café with tasty food and feel-good vibes — totally worth it!”
</p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Herry</h2>
      </div>
    </div>
  );
};

export default Testimonial;
