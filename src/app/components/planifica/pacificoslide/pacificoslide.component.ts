import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]); // Register the modules

@Component({
  selector: 'app-pacificoslide',
  standalone: true, // Or use a module in Angular versions below 14
  imports: [],
  templateUrl: './pacificoslide.component.html',
  styleUrls: ['./pacificoslide.component.css']
})
export class PacificoslideComponent implements OnInit {

  fondos: string[] = ['fondo-1', 'fondo-2', 'fondo-3', 'fondo-4']; // Background class names
  images: string[] = []; // Array of image URLs or paths

  ngOnInit() {
    // Initialize your image URLs or paths here
    this.images = [
      '/assets/img/imgPacifico/PACIFICO0.jpg',
      '/assets/img/imgPacifico/PARQUE NATURAL PACIFICO.jpg',
      '/assets/img/imgPacifico/PARQUE NATURAL PACIFICO1.jpg',
      '/assets/img/imgPacifico/playa1.jpg'
      // ...
    ];

    // Initialize Swiper
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

