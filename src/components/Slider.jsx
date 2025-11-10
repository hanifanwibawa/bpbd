import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return <Carousel fade className="carousel-bpbd">
  <Carousel.Item style={{ backgroundImage: 'url(/slide1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
    <div className="view-carousel">
    <div className="h-100 d-flex justify-content-center align-items-center text-center black-overlay">
              <ul className="list-unstyled w-100">
                <li>
                  <h1 className="display-4 fw-bold text-white">SELAMAT DATANG DI WEBSITE</h1>
                  <hr className="w-50 text-center mx-auto"/>
                </li>
                <li>
                  <h3 className="my-4 text-white fw-light">BPBD PROVINSI SUMATERA BARAT</h3>
                </li>
              </ul>
    </div>
    </div>
  </Carousel.Item>
  <Carousel.Item style={{ backgroundImage: 'url(/slide2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
    <div className="view-carousel">
    <div className="h-100 d-flex justify-content-center align-items-center text-center black-overlay">
              <ul className="list-unstyled w-100">
                <li>
                  <h1 className="display-4 fw-bold text-white">SELAMAT DATANG DI WEBSITE</h1>
                  <hr className="w-50 text-center mx-auto"/>
                </li>
                <li>
                  <h3 className="my-4 text-white fw-light">BPBD PROVINSI SUMATERA BARAT</h3>
                </li>
              </ul>
    </div>
    </div>
  </Carousel.Item>
</Carousel>;
}
