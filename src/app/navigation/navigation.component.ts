import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { animateSection } from '../../animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements AfterViewInit {

  isMobileMenuOpen = false;

  constructor(private el: ElementRef){}

  ngAfterViewInit(): void {
    animateSection(this.el.nativeElement.querySelector("#nav"))
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
