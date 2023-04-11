import React from "react";
import { Image } from "react-bootstrap";
import Typed from "react-typed";
import styles from "../styles/main.module.scss";
import NavbarComponent from "../common/NavbarComponent";
import SvgComponent from "./PlatformSvg"
import FooterComponent from "../common/FooterComponent";

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
            <div className="elementor-background-overlay"></div>
            <div className="elementor-content-platform">
              <div data-aos="fade-right" data-aos-delay="900" className="ms-4 element">
                <h4 className="text-white">WORLD&#39;S 1ST & ONLY</h4>
                <span>E2E <span className="textcolor">NO CODE</span> <br/>
                  <span className="textcolor">AI</span> Platform
                </span>
              </div>
            </div>
            <div className={`${styles.svgComponent}`}>
              {/* <SvgComponent/> */}
              <Image src="images/background.png" alt=""/>
            </div>
          </div>

        </div>
        <div className="home row my-5">
          <div className="col-md-6 p-1">
            <Image
              src="images/picture1.png"
              alt="desktop"
              className={`${styles.desktopimg}` }
            />
          </div>
          <div className="col-md-6 p-2">
            <div className="p-3">
              <h3 className="py-2 fs-2"><span className="fw-light">STEP</span> <span className="text-primary">01/06</span></h3>
              <h1 className={`py-1`}>HOME Page</h1>
              <p className={`${styles.platformfont} `}>
                Get a bird’s eye view of the whole range of models that are
                prebuilt &  </p>
                <p className={`${styles.platformfont}`}> customizable based on top industry use
                cases/problems.</p>
            
            </div>
          </div>
        </div>
        <div className="Datasection row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <Image src="" alt="data"/>
            </div>
        </div>
        <footer className="footerContainer p-5">
            <div>
                <FooterComponent/>
            </div>
        </footer>
      </div>
    </>
  );
}

export default Platform;
