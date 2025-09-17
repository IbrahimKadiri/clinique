import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { TeamComponent } from '../team/team.component';
import { ContactComponent } from '../contact/contact.component';

import { gsap } from 'gsap';
import { animateAbout, animateCards, animateHero, animateSection, animateTeam } from '../../animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent, ServicesComponent, TeamComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
    constructor(private el: ElementRef) {}

    ngAfterViewInit(): void {
      const container = this.el.nativeElement.querySelector('#crosses');
      // Créer 15 croix avec taille, vitesse et rotation différentes
      for (let i = 0; i < 20; i++) {
        const cross = document.createElement('div');
        cross.classList.add('cross');
        cross.textContent = "✚";
        container.appendChild(cross);
        
        // Taille aléatoire
        const size = Math.random() * 60 + 40; // 40 à 100px
        cross.style.fontSize = `${size}px`;

        // Opacité aléatoire
        cross.style.color = `rgba(16,185,129,${Math.random() * 0.2 + 0.15})`;

        // Position initiale
        cross.style.left = `${Math.random() * 100}%`;
        cross.style.top = `${Math.random() * 100}%`;

        // Animation flottante organique
        gsap.to(cross, {
          x: "+=" + (Math.random() * 200 - 100),
          y: "+=" + (Math.random() * 200 - 100),
          rotation: Math.random() * 360,
          duration: Math.random() * 20 + 15, // vitesse différente
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 5
        });
      }

      // Animation texte et boutons
      const hero = this.el.nativeElement.querySelector('#heroSection');
      if (hero) animateHero(hero);
    }
}
