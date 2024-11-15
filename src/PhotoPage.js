import React, { useState, useEffect, useRef } from "react";
import { Carousel, Button } from "react-bootstrap";
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
import "sweetalert2/dist/sweetalert2.min.css";
import "animate.css";
import Swal from 'sweetalert2';

// function PhotoPage() {
//   const [sliderVisible, setSliderVisible] = useState(false);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           setSliderVisible(true);
//           observer.unobserve(sliderRef.current); // berhenti mengamati setelah terlihat
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (sliderRef.current) {
//       observer.observe(sliderRef.current);
//     }

//     return () => {
//       if (sliderRef.current) {
//         observer.unobserve(sliderRef.current);
//       }
//     };
//   }, []);
function PhotoPage() {
  // Daftar URL gambar
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12
  ];

  return (
    <div className="photo-container">
      <h1>Foto Spesial</h1>
      <div className="photo-gallery">
        {photos.map((photos, index) => (
          <img key={index} src={photos} alt={`Foto ${index + 1}`} className="photo-gallery" />
        ))}
      </div>
    </div>
  );
}

export default PhotoPage;
