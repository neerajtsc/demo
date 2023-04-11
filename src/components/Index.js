import React, { useEffect } from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Image,
    Nav,
    NavDropdown,
    Navbar,
    Row,
    Table,
  } from "react-bootstrap";
import { IconMessage2, IconMessageCircle2, IconSearch } from "@tabler/icons";
import styles from "../../styles/main.module.scss";
import { useRouter } from "next/router";
import "aos/dist/aos.css";
import Aos from "aos";
import Typed from "react-typed";
import CloudUp from "./CloudUp";
import CloudDown from "./CloudDown";
import NavbarComponent from "../common/NavbarComponent";
import FooterComponent from "../common/FooterComponent";

export default function Index() {
    useEffect(() => {
        setTimeout(() => {
            Aos.init()
        }, 0)
    }, [])
    const router = useRouter();
    return (
        <>
            <div className={`${styles.body}`}>
                <div className={`${styles.chat}`}>
                    <Button className="btn-success rounded rounded-5 p-3">
                        <IconMessageCircle2 fill="white" size={28} />
                    </Button>
                </div>
                <div className={`${styles.header}`}>
                    <NavbarComponent/>
                    <div class="elementor-background-video-container" style={{ width: "100%" }}>
                        <video className="elementor-background-video-hosted elementor-html5-video" controls={false} autoplay="autoplay"
                            muted playsinline loop style={{ width: "100%" }} src="videos/vid1.mp4" />
                    </div>
                    <div class="elementor-background-overlay"></div>
                    <div className="elementor-content " >
                        <div data-aos="fade-right" data-aos-delay="900" className="ms-4 element">
                            <span>Helping Enterprise</span>
                            <p>
                                <span className="typed" data-typed-items="Build,Scale,Accelerate,Discover"></span>
                                <Typed
                                    strings={["Build", "Scale", "Accelerate", "Discover"]}
                                    typeSpeed={120}
                                    backSpeed={50}
                                    loop
                                    cursorChar=" "
                                >
                                    <span className={`${styles.textcolor}`} />
                                </Typed>
                                <span>HRMS</span>
                            </p>
                            <div className="">
                                <button className={`${styles.greenbutton}`} >
                                    <h4 className="">BOOK A DEMO</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row py-3 counter px-5">
                        <div className="col-md-3 text-center">
                            <div className="numbers">
                                100%
                            </div>
                            <div className="counter-title fw-bold">DATA SECURITY &amp; PRIVACY</div>
                            <p className="text-white fs-6">With GDPR, SOC-2 &amp; ISO 27001,<br />Built On Blockchain &amp; AWS
                            </p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="numbers">
                                {`>30x`}
                            </div>
                            <div className="counter-title fw-bold">DATA SECURITY &amp; PRIVACY</div>
                            <p className="text-white fs-6">With GDPR, SOC-2 &amp; ISO 27001,<br />Built On Blockchain &amp; AWS
                            </p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="numbers">
                                {`>40x`}
                            </div>
                            <div className="counter-title fw-bold">DATA SECURITY &amp; PRIVACY</div>
                            <p className="text-white fs-6">With GDPR, SOC-2 &amp; ISO 27001,<br />Built On Blockchain &amp; AWS
                            </p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="numbers">
                                100%
                            </div>
                            <div className="counter-title fw-bold">DATA SECURITY &amp; PRIVACY</div>
                            <p className="text-white fs-6">With GDPR, SOC-2 &amp; ISO 27001,<br />Built On Blockchain &amp; AWS
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div id="who_we_are" className="row my-5">
                        <div className="col-md-6 col-12 m-0 p-0 image-container">
                            <Image alt="dummy" src="/images/teamwork.jpg" className="img img-fluid weimage" />
                            <div className="image-numbers">
                                <span>1000+</span>
                                <p className="text-center fs-6 ">
                                    AI Models, Prebuilt
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 p-4">
                            <div className="ms-3 mb-4">
                                <h2 className="fw-bold">WHO <span className="textcolor">WE</span> ARE</h2>
                                <h1 className="fw-bold">
                                    We enable you to build &amp;
                                    deploy your AI models at hyper-speed.
                                </h1>
                            </div>
                            <div className="ms-3">
                                <p>
                                    Ours is the world&#39;s first &amp;
                                    only end-to-end platform for all your AI-powered innovation needs — right from data cleansing &amp;
                                    structuring, to creating &amp;
                                    deploying advanced data-science models, to infusing advanced analytics algorithms with a built-in Recommendation AI,
                                    to deducing the outcomes with easy to deduce visualization dashboards,
                                    as well as Explainable AI to backtrack how the outcomes were derived — our no-code AI platform can do it all!
                                </p>
                                <p>
                                    Our platform offers an holistic, seamless data-science experience.
                                    With key features like a robust Data Lakehouse, a unique AI Studio,
                                    a comprehensive AI Marketplace, and a world-class data-science support team (on need basis),
                                    FutureAnalytica is geared to reduce your time, efforts &amp;
                                    costs across your data-science &amp;
                                    AI journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="our-mission" className=" mx-1 d-flex justify-content-center align-items-center" >
                        <div className="mission-container ">
                            <div className="">
                                <h3 className="mb-4">OUR <span className="fw-bold">MISSION</span></h3>
                            </div>
                            <div className="elementor-widget-container">
                                <h2 class="">Accelerate the
                                    <span className="fw-bold textcolor"> adoption &amp; transition</span>
                                    of AI in the world, for
                                    <span className="fw-blod textcolor"> a better </span>world.
                                </h2>
                            </div>
                        </div>
                        <div className="line-container">
                            <div className="line"></div>
                        </div>
                        <div className="vision-container">
                            <div className="">
                                <h3 className="mb-4">OUR <span className="fw-bold">VISION</span></h3>
                            </div>
                            <div class="elementor-widget-container">
                                <h2 class="">Be the <span className="fw-blod textcolor">world&#39;s AI platform </span>
                                    — turning all data into business insights, lightning fast!
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div id="ai-doing">
                        <h2 class="ai-title">How&apos;s your
                            <span ><strong className="textcolor"> AI</strong></span> doing?
                        </h2>
                        <h4>Talk to our experts today and see how we can help you<br />expedite your data-to-insights journey with AI.</h4>
                        <div className="">
                            <button className="ai-doing-button" >
                                <h4 className="">BOOK A DEMO</h4>
                            </button>
                        </div>
                    </div>
                    <div id="industry" className="my-5">
                        <h1 className="text-center fw-bold mb-5">
                            Achieve Visible <span className="textcolor">ROI</span> for your <span className="textcolor">AI </span>
                            <br />in Weeks, not Years!
                        </h1>
                        <div className="container">
                            <div className="d-flex flex-wrap Cardsgrid">
                                <div className="row mb-3 cardflex">
                                    <div className="d-flex flex-wrap justify-content-evenly">
                                        <div className="flip-card-container mb-3 mx-2">
                                            <div className="flip-card">
                                                <div className="flip-card-front">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <Image alt="A" className="img img-fluid flipimage" src="/images/budget.png" />
                                                    </div>
                                                    <h2 className="text-center fw-bold fs-3 mt-4">Banking/Finance</h2>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div className="">
                                                        <h4 >Top Issues <span className="textcolor"> AI </span>
                                                            can solve in
                                                            <span className="textcolor"> Banking/Financial</span>
                                                        </h4>
                                                        <p>
                                                            <span className="textcolor">●&nbsp;</span>Fraud Detection<br />
                                                            <span className="textcolor">●</span>Credit Risk Analysis<br />
                                                            <span className="textcolor">●</span>Recovery Prediction<br />
                                                            <span className="textcolor">●</span>Underwriting Optimization
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-container mb-3 mx-2">
                                            <div className="flip-card">
                                                <div className="flip-card-front">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <Image alt="A" className="img img-fluid flipimage" src="/images/manufacturing.png" />
                                                    </div>
                                                    <h2 className="text-center fw-bold fs-3 mt-4">Manufacturing</h2>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div className="">
                                                        <h4 >Top Issues <span className="textcolor"> AI</span>
                                                            can solve in
                                                            <span className="textcolor"> Banking/Financial</span>
                                                        </h4>
                                                        <p>
                                                            <span className="textcolor">●&nbsp;</span>Fraud Detection<br />
                                                            <span className="textcolor">●</span>Credit Risk Analysis<br />
                                                            <span className="textcolor">●</span>Recovery Prediction<br />
                                                            <span className="textcolor">●</span>Underwriting Optimization
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-container mb-3 mx-2">
                                            <div className="flip-card">
                                                <div className="flip-card-front">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <Image alt="A" className="img img-fluid flipimage" src="/images/store.png" />
                                                    </div>
                                                    <h2 className="text-center fw-bold fs-3 mt-4">Retail/Ecommerce</h2>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div className="">
                                                        <h4 >Top Issues<span className="textcolor"> AI </span>
                                                            can solve in
                                                            <span className="textcolor"> Retail/Ecommerce</span>
                                                        </h4>
                                                        <p>
                                                            <span className="textcolor">●&nbsp;</span>Fraud Detection<br />
                                                            <span className="textcolor">●&nbsp;</span>Credit Risk Analysis<br />
                                                            <span className="textcolor">●&nbsp;</span>Recovery Prediction<br />
                                                            <span className="textcolor">●&nbsp;</span>Underwriting Optimization
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-container mb-3 mx-2">
                                            <div className="flip-card">
                                                <div className="flip-card-front">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <Image alt="A" className="img img-fluid flipimage" src="/images/insurance.png" />
                                                    </div>
                                                    <h2 className="text-center fw-bold fs-3 mt-4">Health</h2>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div className="">
                                                        <h4 >Top Issues<span className="textcolor"> AI </span>
                                                            can solve in
                                                            <span className="textcolor"> Health</span>
                                                        </h4>
                                                        <p>
                                                            <span className="textcolor">●&nbsp;</span>Fraud Detection<br />
                                                            <span className="textcolor">●</span>Credit Risk Analysis<br />
                                                            <span className="textcolor">●</span>Recovery Prediction<br />
                                                            <span className="textcolor">●</span>Underwriting Optimization
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flip-card-container mb-3 mx-2">
                                            <div className="flip-card">
                                                <div className="flip-card-front">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <Image alt="A" className="img img-fluid flipimage" src="/images/telecommunications.png" />
                                                    </div>
                                                    <h2 className="text-center fw-bold fs-3 mt-4">Telecommunications</h2>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div className="">
                                                        <h4 >Top Issues<span className="textcolor"> AI </span>
                                                            can solve in
                                                            <span className="textcolor"> Telecommunications</span>
                                                        </h4>
                                                        <p>
                                                            <span className="textcolor">●&nbsp;</span>Fraud Detection<br />
                                                            <span className="textcolor">●</span>Credit Risk Analysis<br />
                                                            <span className="textcolor">●</span>Recovery Prediction<br />
                                                            <span className="textcolor">●</span>Underwriting Optimization
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="achieve" className="my-5">
                        <h1 className="text-center fw-bold mb-5">
                            Achieve Visible <span className="textcolor">ROI</span> for your <span className="textcolor">AI </span>
                            <br />in Weeks, not Years!
                        </h1>
                        <div className="row">
                            <div className="col-md-4 p-4">
                                <div className="d-flex justify-content-center my-4">
                                    <Image alt="" src="/images/check-list.png" className="img img-fluid w-25" />
                                </div>
                                <div className="text-center">
                                    <h3 className="fw-bold">
                                        Technology Assessment
                                    </h3>
                                    <p>
                                        Initiate discussions with the leadership,
                                        followed by a quick technology assessment in
                                        <span className="fw-bold">1–3 days.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 p-4">
                                <div className="d-flex justify-content-center my-4">
                                    <Image alt="" src="/images/production.png" className="img img-fluid w-25" />
                                </div>
                                <div className="text-center">
                                    <h3 className="fw-bold">
                                        Production Trial
                                    </h3>
                                    <p>
                                        Build ready-to-integrate AI solutions using FAs fully automated data science & AI platform in
                                        <span className="fw-bold">1–3 days.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 p-4">
                                <div className="d-flex justify-content-center my-4">
                                    <Image alt="" src="/images/distributed.png" className="img img-fluid w-25" />
                                </div>
                                <div className="text-center">
                                    <h3 className="fw-bold">
                                        Technology Assessment
                                    </h3>
                                    <p>
                                        Integrate AI models with business and manage real-time results with advanced MLOps, in
                                        <span className="fw-bold">1–3 days.</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id="ai-enterprise" className="m-0 p-0">
                        <CloudUp />
                        <h2 className="enterprise mt-3">
                            Become an AI-powered enterprise <br />with
                            <span className="bgtext p-1 ms-2 future">FutureAnalytica</span>

                        </h2>
                        <h4 className="text-white">Experience the world&amps;s first & only end-to-end no-code<br /> AI platform.</h4>
                        <div className="mb-4">
                            <button className="ai-doing-button" >
                                <h4 className="">BOOK A DEMO</h4>
                            </button>
                        </div>
                        <CloudDown />
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
