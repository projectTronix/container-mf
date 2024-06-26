import React, {useEffect} from 'react'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import DisplayMain from "../../img/displayMain.png";
import AOS from "aos";
import "aos/dist/aos.css";
import './Display.scss'
const Display = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <Container className="mt-5 mb-5 text-center d-grid justify-content-center">
      <Row className="text-center mb-5">
        <h2>Our Range</h2>
      </Row>
      <Row className='justify-content-center text-center'>
        <Link to="/products">
          <img
            data-aos="zoom-in-up"
            src={DisplayMain}
            alt=""
            className="display-img"
          />
        </Link>
      </Row>
    </Container>
  );
}

export default Display