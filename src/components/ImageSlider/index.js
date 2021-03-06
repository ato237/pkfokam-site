import React from "react";
import { Image } from "./ImageSliderElements";
import Carousel from "react-material-ui-carousel";
import images from "../Images/RCtof.jpg";

import images4 from "../Images/img4.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const ImageSlider = () => {
  return (
    <>
      <Carousel
        indicators={false}
        animation={"slide"}
        timeout={200}
        autoPlay={false}
        NextIcon={<GrNext />}
        PrevIcon={<GrPrevious />}
        navButtonsAlwaysVisible={true}
        fullHeightHover={true}
        // We want the nav buttons wrapper to only be as big as the button element is
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "#fff",
            borderRadius: 5,
          },
        }}
      >
        <div>
          <Image src={images} />
        </div>
        <Image src={images} />
        <Image src={images4} />
        <Image src={images4} />
      </Carousel>
    </>
  );
};

export default ImageSlider;
