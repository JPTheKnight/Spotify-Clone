import React from "react";

import { Wrapper, Content } from "./BigImage.styles";

import listen_pic from "../../../Images/listen-image.jpg";

const BigImage = () => {
  const Alert = () => {
    alert("No.");
  };

  return (
    <Wrapper>
      <Content>
        <div className="info">
          <div className="premium">SPOTIFY PREMIUM</div>
          <div className="title">Get 3 months of Premium for free</div>
          <div className="desc">
            Enjoy ad-free music listening, offline playback, and more. Cancel
            anytime.
          </div>
          <div className="three-months">
            <button className="three-months-button" onClick={Alert}>
              <b>GET 3 MONTHS FREE</b>
            </button>
          </div>
        </div>
        <div className="info-pic">
          <img src={listen_pic} alt="" className="listen-pic" />
        </div>
      </Content>
    </Wrapper>
  );
};

export default BigImage;
