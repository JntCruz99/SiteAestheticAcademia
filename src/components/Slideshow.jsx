import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Slideshow.css'

const Slideshow = () => {
  // Certifique-se de fornecer um array vazio para o segundo argumento do useEffect para que ele só seja executado uma vez

  return (
    <div id="carouselExampleCaptions" class="carousel slide custom-carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="src\img\SLIDE1.png" class="d-block w-100" alt="..."/>
            
        </div>
        <div class="carousel-item">
          <img src="src\img\SLIDE1.png" class="d-block w-100" alt="..."/>
            
        </div>
        <div class="carousel-item">
          <img src="src\img\SLIDE1.png" class="d-block w-100" alt="..."/>
            
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slideshow;
