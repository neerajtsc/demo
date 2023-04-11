import React from "react";
import { Image } from "react-bootstrap";
import Typed from "react-typed";
import styles from "../../styles/main.module.scss";
import NavbarComponent from "../common/NavbarComponent";
import SvgComponent from "./PlatformSvg"

function Platform() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="">
          <div className={`${styles.header}`}>
            <NavbarComponent />
            <div class="elementor-background-video-container" style={{ width: "100%" }}>
              <video className="elementor-background-video-hosted elementor-html5-video" controls={false} autoplay="autoplay"
                muted playsinline loop style={{ width: "100%" }} src="videos/vid2.mp4" />
            </div>
            <div class="elementor-background-overlay"></div>
            <div className="elementor-content " >
              <div data-aos="fade-right" data-aos-delay="900" className="ms-4 element">
                <h4 className="text-white">WORLD&#39;S 1ST & ONLY</h4>
                <span>E2E <span className="textcolor">NO CODE</span> <br/>
                  <span className="textcolor">AI</span> Platform
                </span>
              </div>
            </div>
            <SvgComponent/>
          </div>

        </div>
        <div className="home row">
          <div className="col-md-6">
            <Image src="images/picture1.png" alt="" />
          </div>
          <div className="col-md-6">
            <h1></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;
