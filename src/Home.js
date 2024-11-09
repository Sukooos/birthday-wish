import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

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
        <Button variant="danger" onClick={() => navigate("/photo")}>
          Our Memories! 🎉
        </Button>
      </section>
    </div>
  );
}

export default Home;
