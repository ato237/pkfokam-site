import React, { useState } from "react";
import { SliderContainer,Image } from "./ImageSliderElements";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import images from "../Images/img1.jpg";
import images2 from "../Images/img2.jpg";
import images3 from "../Images/img3.jpg";
import images4 from "../Images/img4.jpg";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { TrendingUpRounded } from "@material-ui/icons";

const ImageSlider = () => {
  return (
    <>
          <Carousel
              animation={"slide"}
              timeout={400}
              NextIcon={<GrNext/>}
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
