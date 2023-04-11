import React from "react";
import { Image } from "react-bootstrap";
import style from "../../styles/main.module.scss"

function Platform() {
  return (
    <>
      <div className="container">
        <div className=""></div>
        <div className="home row my-5">
          <div className="col-md-6 p-1">
            <Image
              src="images/picture1.png"
              alt="desktop"
              className={`${style.desktopimg}` }
            />
          </div>
          <div className="col-md-6 p-2">
            <div className="p-3">
              <h3 className="py-2 fs-2"><span className="fw-light">STEP</span> <span className="text-primary">01/06</span></h3>
              <h1 className={`py-1`}>HOME Page</h1>
              <p className={`${style.platformfont} `}>
                Get a bird’s eye view of the whole range of models that are
                prebuilt &  </p>
                <p className={`${style.platformfont}`}> customizable based on top industry use
                cases/problems.</p>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;
