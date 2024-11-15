import React, { useEffect } from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bootstrapBundleMin from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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

function Home() {
  const navigate = useNavigate();
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

  useEffect(() => {
    // Menambahkan logika untuk memulai cycle jika di perangkat mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // Memastikan carousel otomatis berputar menggunakan `cycle()`
      const carouselElement = document.querySelector('.carousel');
      if (carouselElement) {
        new bootstrapBundleMin.Carousel(carouselElement, {
          interval: 3000, // Set interval untuk ganti gambar setiap 3 detik
          ride: 'carousel',  // Mengaktifkan mode otomatis
        }).cycle();  // Memulai perputaran carousel
      }
    }
  }, []); 

  const showPhotoPopup = () => {
    const isMobile = window.innerWidth <= 768;  // Deteksi perangkat mobile

    // Menampilkan SweetAlert dengan gambar dan checkbox
    Swal.fire({
      title: 'Memories',
      html: `
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            ${photos.map((photos, index) => {
              return `
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" 
                        class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}" 
                        aria-label="Slide ${index + 1}"></button>
              `;
            }).join('')}
          </div>
          <div class="carousel-inner">
            ${photos.map((photos, index) => {
              return `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                  <img src="${photos}" class="d-block w-100" alt="Foto ${index + 1}"/>
                </div>
              `;
            }).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <label>
          <input type="checkbox" id="goToPhotoPage" /> Pergi ke Halaman Foto
        </label>
      `,
      showCancelButton: true,
      confirmButtonText: 'Tutup',
      cancelButtonText: 'Next',
      customClass: {
        popup: 'popup-width',
        ride: "false"
      },
      preConfirm: () => {
        // Mengecek apakah checkbox dicentang
        const goToPhotoPage = document.getElementById('goToPhotoPage').checked;
        if (goToPhotoPage) {
          navigate('/photo');  // Arahkan ke halaman foto jika checkbox dicentang
        }
      },
      willOpen: () => {
        // Mengaktifkan checkbox untuk dikendalikan
        document.getElementById('goToPhotoPage').checked = false;
      },
      didOpen: () => {
        // Jika di perangkat mobile, aktifkan otomatisasi carousel
        if (isMobile) {
          setTimeout(() => {
            const carouselElement = document.querySelector('.carousel');
            if (carouselElement) {
              new bootstrapBundleMin.Carousel(carouselElement, {
                interval: 3000, // Set interval untuk slide otomatis
                ride: 'carousel',
              }).cycle();  // Mulai perputaran carousel
            }
          }, 100);
        }
      }
    });
    // if (isMobile) {
    //   // Menambahkan carousel jika di perangkat mobile
    //   setTimeout(() => {
    //     const carouselItems = document.querySelector('.gallery');
    //     if (carouselItems) {
    //       carouselItems.classList.add('carousel', 'slide');
    //       carouselItems.setAttribute('data-bs-ride', 'carousel');
    //       carouselItems.setAttribute('data-bs-interval', '2000')
    //     }
    //   }, 100);
    // }
  };

  return (
    <div className="container text-center mt-5 p-4 bg-white shadow rounded">
      <header>
        <h1 className="text-danger">Selamat Ulang Tahun, Sayang!</h1>
      </header>
      <section className="main-content mt-4">
        <p className="lead mb-4">
          Hari ini adalah hari spesial! I feel very Lucky bisa
          bersama kamu selama ini. Semoga semua impian kamu tercapai, Semoga Sehat Selalu, Selalu nurut sama orang tua, Semakin baik, Bahagia selalu, dan hari-hari kamu penuh
          dengan kebahagiaan. Aku cinta kamu! Happy Birthday My Gurl!!!!!!
        </p>
        <Button variant="danger" onClick={showPhotoPopup}>
          Our Memories! 🎉
        </Button>
      </section>
    </div>
  );
}

export default Home;
