import React from "react";
import { Parallax } from "react-parallax";
import { getStrapiMedia } from "../lib/media";
import { Toolbar } from "@material-ui/core";

const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  fontSize:'11vh',
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%,-50%)",

};
const outsideStyles = {
  marginBottom: 20,
};

const Hero = ({ hero }) => {
  const imageUrl = getStrapiMedia(hero.banner);
  return (
    <React.Fragment>
      <Parallax bgImage={imageUrl} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 550 }}>
          <h1 style={insideStyles}>{hero.title}</h1>
        </div>
      </Parallax>
      <Toolbar />
    </React.Fragment>
  );
};

export default Hero;
