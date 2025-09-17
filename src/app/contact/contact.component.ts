import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { animateContact } from '../../animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  constructor(private el: ElementRef){}
  ngAfterViewInit(): void {
    animateContact(this.el.nativeElement.querySelector('#contact'));
  }
}
