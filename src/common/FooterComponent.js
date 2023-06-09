import React, { useEffect } from "react";
import styles from "../styles/main.module.scss";
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
import { useRouter } from "next/router";

export default function FooterComponent() {
  const router = useRouter();
  return (
    <>
      <Row>
        <div className="col-md-4 footerLogo py-5">
          <div className="py-3">
            <Image
              src="/images/logowhite.png"
              alt=""
              className="img img-fluid"
              width="140"
              height="140"
            />
          </div>
          <div className="text-white">
            It is Official! We Are Now In GeM,the Indian Government
            e-Marketplace!
          </div>
        </div>
        <div className="col-md-4 py-5 text-white my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="col-md-4">
          <h3 className="text-white">Subscribe To Our Newsletter</h3>
          <div className="pt-4">
            <Form.Control placeholder="Email Address" />
          </div>
          <div className="pt-1">
            <input type="checkbox" />{" "}
            <span className="text-secondary">
              {" "}
              I consent to recieve promotional emails about your products and
              services.(We wont spam you promise!)
            </span>
          </div>
          <div className="pt-1">
            <Button className="btn btn-success sub text-white w-100">
              Subscribe Now
            </Button>
          </div>
        </div>
      </Row>
      <Row>
        <div className="whiteLine my-4 "></div>
      </Row>
      <Row>
        <div className="col-md-6 mt-4">
          <Image
            alt=""
            src="/images/logowhite.png"
            width="200"
            height="200"
            className="img img-fluid"
          />
        </div>
        <div className="col-md-3  py-4">
          <div className="py-2"><a className="text-white">About</a></div>
          <div className="py-2"><a className="text-white">Platform</a></div>
          <div className="py-2"><a className="text-white">Contact</a></div>
        </div>
        {/* <div className="col-md-3 d-flex justify-content-between py-4">
           <div><Image alt="" src="/images/facebookWhite.png" /></div>
          <Image alt="" src="/images/twitterWhite.png" />
          <Image alt="" src="/images/instagramWhite.png" />
          <Image alt="" src="/images/linkedinWhite.png" />
          <Image alt="" src="/images/youtubeWhite.png" />
          <Image alt="" src="/images/mWhite.png" />
        </div> */}
    
        <div className="col-md-3 text-white py-4">
           <div className="py-2">Privacy</div>
          <div className="py-2">T&C</div>
          <div className="py-2">Sitemap</div>
       
          </div>
        </Row>
       <Row className="pt-2 text-white">
        <div className=" d-flex justify-content-center">
          Copyright@2023TechSuperior
        </div>
      </Row>
    </>
  );
}
