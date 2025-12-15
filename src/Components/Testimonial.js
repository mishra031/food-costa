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
    An unforgettable dining experience! The flavors were rich, the ambiance
    was elegant, and the service made us feel truly special. 
  </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
         Every dish was  beautifully presented and absolutely delicious. This is now our go-to
    place for family dinners and celebrations.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jenny</h2>
      </div>
    </div>
  );
};

export default Testimonial;
