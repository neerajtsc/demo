import React, { useEffect } from "react";
import { IconMessage2, IconMessageCircle2, IconSearch } from "@tabler/icons";
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
import styles from "../../styles/main.module.scss";
import { useRouter } from "next/router";
import 'aos/dist/aos.css';
import Aos from "aos";
import Typed from "react-typed";

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
                    <Navbar collapseOnSelect expand="lg" variant="light" className={`${styles.navbar}`}>
                        <Container>
                            <Navbar.Brand href="/">
                                <Image alt="" src="/images/logowhite.png" width="240" height="170" className="img img-fluid" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto ">
                                    <NavDropdown title="About" id="collasible-nav-dropdown" className={`${styles.dropdown} mx-2 `} >
                                        <NavDropdown.Item >
                                            Who Are You
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#attendance">
                                            Why We Are Unique
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#leave">
                                            How We Are Unique
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#leave">
                                            Why Join us
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link className="mx-2 text-white" href="#platform">
                                        Platform
                                    </Nav.Link>
                                    <NavDropdown className="mx-2" title="Solutions" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#payrollSoftware">
                                            By Industry
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#hris">
                                            By Capability
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown className="mx-2" title="Resources" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#payrollSoftware">
                                            Blog
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#hris">
                                            FAQs
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#hcm">
                                            Use case
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link className="mx-2 text-white" href="#platform" >
                                        Contact
                                    </Nav.Link>
                                    <Nav.Link className="mx-2 text-white" href="/loginPage" >
                                        Login
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div class="elementor-background-video-container" style={{ width: "100%" }}>
                        <video className="elementor-background-video-hosted elementor-html5-video" controls={false} autoplay="autoplay"
                            muted playsinline loop style={{ width: "100%" }} src="videos/vid1.mp4" />
                    </div>
                    <div class="elementor-background-overlay"></div>
                    <div className="elementor-content" >
                        <div data-aos="fade-right" data-aos-delay="900" className="ms-4">
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
                                {'>30x'}
                            </div>
                            <div className="counter-title fw-bold">DATA SECURITY &amp; PRIVACY</div>
                            <p className="text-white fs-6">With GDPR, SOC-2 &amp; ISO 27001,<br />Built On Blockchain &amp; AWS
                            </p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="numbers">
                                {'>40x'}
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
                <div className="container-fluid">
                    <div id="who_we_are" className="row my-5">
                        <div className="col-6 m-0 p-0 image-container">
                            <Image alt="dummy" src="/images/teamwork.jpg" className="img img-fluid weimage" />
                            <div className="image-numbers">
                                <span>1000+</span>
                                <p className="text-center fs-6 ">
                                    AI Models, Prebuilt
                                </p>
                            </div>
                        </div>
                        <div className="col-6 p-4">
                            <div className="ms-3 mb-4">
                                <h2 className="fw-bold">WHO <span className="textcolor">WE</span> ARE</h2>
                                <h1 className="fw-bold">
                                    We enable you to build &amp;
                                    deploy your AI models at hyper-speed.
                                </h1>
                            </div>
                            <div className="ms-3">
                                <p>
                                    Ours is the world’s first &amp;
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
                        <h4>Talk to our experts today and see how we can help you<br/>expedite your data-to-insights journey with AI.</h4>
                        <div className="">
                                <button className="ai-doing-button" >
                                    <h4 className="">BOOK A DEMO</h4>
                                </button>
                            </div>
                    </div>
                </div>
                <footer className="footerContainer p-5">
                    <div>
                        <Row>
                            <div className="col-md-4 footerLogo py-5">
                                <div className="py-3">
                                    <Image src="/images/logowhite.png" alt="" className="img img-fluid" width="140"
                                        height="140" />
                                </div>
                                <div className="text-white">
                                    It is Official! We Are Now In GeM,the Indian Government e-Marketplace!
                                </div>
                            </div>
                            <div className="col-md-4 py-5 text-white my-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                            <div className="col-md-4">
                                <h3 className="text-white">Subscribe To Our Newsletter</h3>
                                <div className="pt-4">
                                    <Form.Control placeholder="Email Address" />
                                </div>
                                <div className="pt-1">
                                    <input type="checkbox" /> <span className="text-secondary"> I consent to recieve promotional emails about your products and services.(We wont spam you promise!)</span>
                                </div>
                                <div className="pt-1">
                                    <Button className="btn btn-primary text-white w-100">Subscribe Now</Button>
                                </div>

                            </div>
                        </Row>
                        <Row>
                            <div className="whiteLine my-4 "></div>
                        </Row>
                        <Row>
                            <div className="col-md-3 mt-4">
                                <Image
                                    alt=""
                                    src="/images/logowhite.png"
                                    width="200"
                                    height="200"
                                    className="img img-fluid"
                                />
                            </div>
                            <div className="col-md-6 d-flex justify-content-around py-4">
                                <a className="text-white">
                                    About
                                </a>
                                <a className="text-white">
                                    Platform
                                </a>
                                <a className="text-white">Contact</a>
                            </div>
                            <div className="col-md-3 d-flex justify-content-between py-4">
                                <Image alt="" src="/images/facebookWhite.png" />
                                <Image alt="" src="/images/twitterWhite.png" />
                                <Image alt="" src="/images/instagramWhite.png" />
                                <Image alt="" src="/images/linkedinWhite.png" />
                                <Image alt="" src="/images/youtubeWhite.png" />
                                <Image alt="" src="/images/mWhite.png" />
                            </div>
                        </Row>
                        <Row className="whiteLine mt-4"></Row>
                        <Row className="text-white pt-5">
                            <div className="col-md-3 d-flex justify-content-between ps-5">Privacy</div>
                            <div className="col-md-6 d-flex justify-content-around">
                                <div>T&C</div>
                                <div>Sitemap</div>
                                <div>Cookie Policy</div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-center">Copyright@2023TechSuperior</div>
                        </Row>
                    </div>
                </footer>
            </div>
        </>
    );
}
