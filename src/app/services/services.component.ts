import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Service } from '../models/service.model';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { animateServices } from '../../animations';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, AfterViewInit {

  services: Service[] = [];
  constructor(private _router: Router, private servicesService: ServicesService, private el: ElementRef) {}
  
  ngOnInit(): void {
    this.services = this.servicesService.getAll();
  }

  ngAfterViewInit(): void {
    animateServices(this.el.nativeElement.querySelector('#services'))
  }

  goToDetails(id: string) {
    this._router.navigate(['services', id]); 
  }

}
