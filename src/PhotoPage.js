import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import photo1 from "./image/poto1.jpeg";  // Import gambar
import photo2 from "./image/poto2.jpeg";
import photo3 from "./image/poto3.jpeg";
import photo4 from "./image/poto4.jpeg";
import photo5 from "./image/poto5.jpeg";
import photo6 from "./image/poto6.jpeg";
import photo7 from "./image/poto7.jpeg";
import photo8 from "./image/poto8.jpeg";
import photo9 from "./image/poto9.jpeg";
import photo10 from "./image/poto10.jpeg";
import photo11 from "./image/poto11.jpeg";
import photo12 from "./image/poto12.jpeg";
import "./App.css";

function PhotoPage() {
  const [sliderVisible, setSliderVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setSliderVisible(true);
          observer.unobserve(sliderRef.current); // berhenti mengamati setelah terlihat
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  return (
    <div className="container text-center mt-5 p-4 bg-white shadow rounded">
      <header>
        <h1 className="text-danger">Our Memo</h1>
      </header>
      <section className="mt-4">
        <div
          className={`slider ${sliderVisible ? "visible" : ""}`}
          ref={sliderRef}
        >
          <Carousel fade controls={false} indicators={false} interval={1500}>
            <Carousel.Item>
                <img
                src={photo1}
                alt="Foto 1"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo2}
                alt="Foto 2"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo3}
                alt="Foto 3"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo4}
                alt="Foto 4"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo5}
                alt="Foto 5"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo6}
                alt="Foto 6"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo7}
                alt="Foto 7"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo8}
                alt="Foto 8"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo9}
                alt="Foto 9"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo10}
                alt="Foto 10"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo11}
                alt="Foto 11"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={photo12}
                alt="Foto 12"
                className="d-block w-100 rounded mb-3"
                />
            </Carousel.Item>
          </Carousel>

        </div>
      </section>
    </div>
  );
}

export default PhotoPage;
