import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { animateAbout } from '../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    animateAbout(this.el.nativeElement.querySelector('#about'))
  }
}
