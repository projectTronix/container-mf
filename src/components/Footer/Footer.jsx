import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.scss";
import { Link } from "react-router-dom";
import paymentvisa from "../../img/payment-2.svg";
import paymentmastercard from "../../img/payment-1.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <Container fluid className="footer bg-black">
      <Row className="top p-5">
        <Col className="item">
          <h1>Categories</h1>
          <Link className="link" to="/products">
            Grocery
          </Link>
          <Link className="link" to="/products">
            Electronics
          </Link>
          <Link className="link" to="/products">
            Footwear
          </Link>
          <Link className="link" to="/products">
            Home
          </Link>
        </Col>
        <Col className="item">
          <h1>Links</h1>
          <Link className="link">FAQ</Link>
          <Link className="link">Pages</Link>
          <Link className="link">Cookies</Link>
        </Col>
        <Col className="item">
          <h1>Contact</h1>
          <span className="">
            <span>Reach out to us</span>
            <div className="d-flex  gap-5 mt-5">
              <XIcon />
              <FacebookIcon />
              <InstagramIcon />
              <EmailIcon />
            </div>
          </span>
        </Col>
      </Row>
      <Row className="bottom">
        <Col className="left">
          <span className="logo">Tronix.Inc</span>
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </Col>
        <Col className="right d-flex gap-5 justify-content-center">
          <img className="payment-img" src={paymentvisa} alt="payment-img" />
          <img
            className="payment-img"
            src={paymentmastercard}
            alt="payment-img"
          />
          <img
            className="payment-img"
            src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg"
            alt="payment-img"
          />
          <img
            className="payment-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/383px-RuPay.svg.png"
            alt="payment-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
