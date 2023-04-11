import React, { useState } from "react";
import { IconSearch } from "@tabler/icons";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import { IconMessage2, IconMessageCircle2 } from "@tabler/icons";
import styles from "../../styles/main.module.scss";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import NavbarComponent from "../common/NavbarComponent";
import FooterComponent from "../common/FooterComponent";

export default function ContectComponent() {
  const [capchaChecked, setCapchaChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const capchaCheckedHandle = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setCapchaChecked(true);
  };

  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.chat}`}>
          <Button className="btn-success rounded rounded-5 p-3">
            <IconMessageCircle2 fill="white" size={28} />
          </Button>
        </div>
        <div className={`${styles.contectHeader}`}>
          <NavbarComponent />
          <div className={`${styles.contectHead} row`}>
            <div className={`${styles.contectText} col-md-6`}>
              <span className={`${styles.contactTextSpan}`}>Contact</span>
            </div>
            <div className={`${styles.contectImage} col-md-6`}>
              <Image
                className={`${styles.contectMainImage}`}
                src="./images/Contact-us-amico.svg"
                alt=""
              />
            </div>
            <div
              className="elementor-shape elementor-shape-bottom"
              data-negative="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 200"
                preserveAspectRatio="none"
              >
                <path
                  className="elementor-shape-fill"
                  fill="#ffff"
                  d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	                c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	                c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
                ></path>
              </svg>{" "}
            </div>
          </div>
        </div>
        <div className={`${styles.container}`}>
          <section className="row">
            <div className={`${styles.companyDetails} col-md-7`}>
              <h1>
                Connect With <span>FutureAnalytica</span>
              </h1>
              <p>
                We are just one click away to assist you in making your business
                smart using AI.
              </p>
            </div>
            <div className="col"></div>
          </section>
          <section className="row mt-4">
            <div className={`${styles.detailsForm} col-md-6`}>
              <h1>
                Send Your <span>Details</span>
              </h1>
              <div className={`mt-4 mx-3`}>
                <div className={`row mb-3`}>
                  <div className={`${styles.formData} col-md-5`}>
                    <input placeholder="First Name*" type="text" />
                  </div>
                  <div className={`${styles.formData} col-md-5 mx-5`}>
                    <input placeholder="Last Name*" type="text" />
                  </div>
                </div>
                <div className={`row mb-3`}>
                  <div className={`${styles.formData} col-md-5`}>
                    <input placeholder="Work Email*" type="text" />
                  </div>
                  <div className={`${styles.formData} col-md-5 mx-5`}>
                    <input placeholder="Contact Number*" type="text" />
                  </div>
                </div>
                <div className={`row mb-3`}>
                  <div className={`${styles.formData} col-md-5`}>
                    <input placeholder="Company Name*" type="text" />
                  </div>
                  <div className={`${styles.formData} col-md-5 mx-5`}>
                    <input placeholder="Job Title*" type="text" />
                  </div>
                </div>
                <div className={`${styles.formData}`}>
                  <textarea as="textarea" placeholder="Any message for us?" />
                </div>
                <div className={`${styles.capchaCard} mt-5 mb-3`}>
                  <div className={`d-flex`}>
                    {!capchaChecked ? (
                      <div
                        className={styles.checkbox}
                        onClick={capchaCheckedHandle}
                      ></div>
                    ) : (
                      <>
                        {!isLoading ? (
                          <div>
                            <Image src="./images/check-right.png" alt=""/>
                          </div>
                        ) : (
                          <ClipLoader color="#36d7b7" />
                        )}
                      </>
                    )}
                    <label className="mx-2">i am not a robot</label>
                  </div>
                  <div className={`${styles.cepchaImgDiv}`}>
                    <div>
                      <Image
                        className={`${styles.capchaImg}`}
                        src="./images/capcha.png"
                        alt=""
                      />
                      <span className={`${styles.reCapcha}`}>reCAPTCHA</span>
                    </div>
                    <span className={`${styles.privacyLink}`}>
                      Privacy - Terms
                    </span>
                  </div>
                </div>
                <button className={`${styles.submitButton} btn`}>Submit</button>
              </div>
            </div>
            <div className={`${styles.officeLocation} col-md-6`}>
              <h1>
                Office <span>Locations</span>
              </h1>
              <p className="mt-3">Primary address</p>
              <strong>US Headquarters:</strong> 505 5th Ave, 15th Floor, New
              York, NY 10017, US
              <br />
              <strong>Phone:</strong> +1 (415) 268-0019
              <p className="mt-4">Other Locations</p>
              <strong>Greenwich CT Office:</strong> 265 Greenwich Ave,
              Greenwich, Connecticut 06830, US
              <div className="mt-5">
                <strong>Engineering Headquarters:</strong> FF- 137A & FF-137B,
                First Floor, A- Block, JMD Megapolis, Sohna Road, Sector-48,
                Gurugram, Haryana 122018, IN
              </div>
            </div>
          </section>
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
