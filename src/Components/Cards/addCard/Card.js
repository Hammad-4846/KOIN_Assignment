import React from "react";
import { FaArrowRight } from "react-icons/fa";

import "./Card.scss";
import images from "../../../Constants/images";
import MotionWrap from "../../../Wrapper/MotionWrap";

function Card() {
  return (
    <div className="card__container">
      <h2>Get Started With KoinX for FREE</h2>

      <p>
        With our range of feature that you can equip for free, KoinX allows you
        to be more educated and aware of your text reports.
      </p>

      <img src={images.Training} alt="visual_img" />
      <a className="btn" href="/#contact">
        Get Started for FREE <FaArrowRight />
      </a>
    </div>
  );
}

export default Card;
