import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import Typed from "react-typed";
import styles from "../styles/main.module.scss";
import NavbarComponent from "../common/NavbarComponent";
import SvgComponent from "./PlatformSvg"
import FooterComponent from "../common/FooterComponent";
import "aos/dist/aos.css";
import Aos from "aos";

function Platform() {
  useEffect(() => {
    setTimeout(() => {
      Aos.init()
    }, 0)
  }, [])
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
                <span>E2E <span className="textcolor">NO CODE</span> <br />
                  <span className="textcolor">AI</span> Platform
                </span>
              </div>
            </div>
            <div className={`${styles.svgComponent}`}>
              {/* <SvgComponent/> */}
              <Image src="images/background.png" alt="" />
            </div>
          </div>

        </div>
        <div id="1" className="home row my-5">
          <div className="col-md-6 p-1" data-aos="fade-right" data-aos-delay="700">
            <Image
              src="images/picture1.png"
              alt="desktop"
              className={`${styles.desktopimg}`}
            />
          </div>
          <div className="col-md-6 p-2" data-aos="fade-left" data-aos-delay="700">
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
        <div id="2" className="home row my-5">
          <div className="col-md-6 p-2" data-aos="fade-right" data-aos-delay="700">
            <div className="p-3 textrigth">
              <h3 className="py-2 fs-2"><span className="fw-light">STEP</span> <span className="text-primary">02/06</span></h3>
              <h1 className={`py-1`}>Data lake</h1>
              <p className={`${styles.platformfont} `}>
                Get a bird’s eye view of the whole range of models that are
                prebuilt &  </p>
              <p className={`${styles.platformfont}`}> customizable based on top industry use
                cases/problems.</p>

            </div>
          </div>
          <div className="col-md-6 p-1" data-aos="fade-left" data-aos-delay="700">
            <Image
              src="images/picture1.png"
              alt="desktop"
              className={`${styles.desktopimg}`}
            />
          </div>
        </div>
        <div id="3" className="home row my-5">
          <div className="col-md-6 p-1" data-aos="fade-right" data-aos-delay="700">
            <Image
              src="images/picture1.png"
              alt="desktop"
              className={`${styles.desktopimg}`}
            />
          </div>
          <div className="col-md-6 p-2" data-aos="fade-left" data-aos-delay="700">
            <div className="p-3">
              <h3 className="py-2 fs-2"><span className="fw-light">STEP</span> <span className="text-primary">03/06</span></h3>
              <h1 className={`py-1`}>DATA lakehouse</h1>
              <p className={`${styles.platformfont} `}>
                Get a birds eye view of the whole range of models that are
                prebuilt &  </p>
              <p className={`${styles.platformfont}`}> customizable based on top industry use
                cases/problems.</p>

            </div>
          </div>
        </div>
        <div id="4" className="home row my-5">
          <div className="col-md-6 p-2" data-aos="fade-right" data-aos-delay="700">
            <div className="p-3 textrigth">
              <h3 className="py-2 fs-2"><span className="fw-light">STEP</span> <span className="text-primary">04/06</span></h3>
              <h1 className={`py-1`}>The AI Studio</h1>
              <p className={`${styles.platformfont} `}>
                Get a birds eye view of the whole range of models that are
                prebuilt &  </p>
              <p className={`${styles.platformfont}`}> customizable based on top industry use
                cases/problems.</p>

            </div>
          </div>
          <div className="col-md-6 p-1" data-aos="fade-left" data-aos-delay="700">
            <Image
              src="images/picture1.png"
              alt="desktop"
              className={`${styles.desktopimg}`}
            />
          </div>
        </div>
        <div id="5" className="home row my-5">
          <div className="col-md-6 p-1" data-aos="fade-right" data-aos-delay="700">
            <Image
              src="images/picture1.png"
              alt="desktop"
              className={`${styles.desktopimg}`}
            />
          </div>
          <div className="col-md-6 p-2" data-aos="fade-left" data-aos-delay="700">
            <div className="p-3">
              <h3 className="py-2 fs-2"><span className="fw-light">STEP</span> <span className="text-primary">05/06</span></h3>
              <h1 className={`py-1`}>The AI Marketplace</h1>
              <p className={`${styles.platformfont} `}>
                Get a bird’s eye view of the whole range of models that are
                prebuilt &  </p>
              <p className={`${styles.platformfont}`}> customizable based on top industry use
                cases/problems.</p>

            </div>
          </div>
        </div>
        <div id="6" className="home row my-5">
          <div className="col-md-6 p-2" data-aos="fade-right" data-aos-delay="700">
            <div className="p-3 textrigth">
              <h3 className="py-2 fs-2"><span className="fw-light">STEP</span> <span className="text-primary">06/06</span></h3>
              <h1 className={`py-1`}>Business Insights</h1>
              <p className={`${styles.platformfont} `}>
                Get a birds eye view of the whole range of models that are
                prebuilt &  </p>
              <p className={`${styles.platformfont}`}> customizable based on top industry use
                cases/problems.</p>

            </div>
          </div>
          <div className="col-md-6 p-1" data-aos="fade-left" data-aos-delay="700">
            <Image
              src="images/picture1.png"
              alt="desktop"
              className={`${styles.desktopimg}`}
            />
          </div>
        </div>

        <footer className="footerContainer p-5">
          <div>
            <FooterComponent />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Platform;
