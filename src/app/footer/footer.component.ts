import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit {

  constructor(private el: ElementRef){}

  ngAfterViewInit(): void {


      const footerCrosses = document.getElementById("footerCrosses");
       if (!footerCrosses) return; // sécurité
      // Création de 30 croix aléatoires
      // Créer 15 croix avec taille, vitesse et rotation différentes
      for (let i = 0; i < 20; i++) {
        const cross = document.createElement('div');
        cross.classList.add('cross');
        cross.textContent = "✚";
        footerCrosses.appendChild(cross);
        
        // Taille aléatoire
        const size = Math.random() * 10 + 20; // 40 à 100px
        cross.style.fontSize = `${size}px`;

        // Opacité aléatoire
        cross.style.color = `rgba(255,255,255,${Math.random() * 0.2 + 0.15})`;

        // Position initiale
        cross.style.left = `${Math.random() * 100}%`;
        cross.style.top = `${Math.random() * 100}%`;

        // Animation flottante organique
        gsap.to(cross, {
          y: "+=100",
          x: "+=50",
          duration: 8 + Math.random() * 4,
          rotation: Math.random() * 360,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
  }
}
