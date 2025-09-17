import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import { Service } from '../models/service.model';
import { CommonModule } from '@angular/common';
import { animateSection } from '../../animations';

@Component({
  selector: 'app-service-detail',
  imports: [CommonModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit, AfterViewInit {
  service?: Service;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService,
    private el: ElementRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service = this.servicesService.getById(id);
    }
  }

  ngAfterViewInit(): void {
    animateSection(this.el.nativeElement.querySelector("#details"))
  }
}
