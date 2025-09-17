import { Injectable } from '@angular/core';
import { Service } from './models/service.model';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

   private services = [
  {
    id: '1',
    icon: 'assets/images/doctor-logo.svg',
    image: 'assets/images/infirmier.jpg',
    title: 'Médecin Généraliste',
    shortDesc: 'Consultations régulières et suivi complet pour toute la famille.',
    longDesc: `Notre médecin généraliste assure un suivi médical régulier et complet, 
      incluant les consultations courantes, le dépistage préventif et les conseils personnalisés. 
      Chaque patient bénéficie d’une approche attentive et humaine, avec un plan de soins adapté à ses besoins. 
      Nous mettons un point d’honneur à créer une relation de confiance et à accompagner toute la famille dans son parcours de santé.`
  },
  {
    id: '2',
    icon: 'assets/images/dumbell-logo.svg',
    image: 'assets/images/kine.jpg',
    title: 'Kinésithérapie',
    shortDesc: 'Rééducation, prévention et accompagnement personnalisé.',
    longDesc: `Nos kinésithérapeutes expérimentés proposent des séances de rééducation ciblées, 
      adaptées à chaque patient en fonction de ses besoins spécifiques et de son état de santé. 
      Que ce soit après une blessure, une chirurgie, ou pour prévenir les troubles musculo-squelettiques, 
      nous élaborons des programmes sur mesure afin d’optimiser la récupération, améliorer la mobilité et favoriser le bien-être quotidien.`
  },
  {
    id: '3',
    icon: 'assets/images/vaccin-logo.svg',
    image: 'assets/images/vaccin.jpg',
    title: 'Vaccinations',
    shortDesc: 'Programmes de prévention complets pour tous les âges.',
    longDesc: `Nous proposons des programmes de vaccination complets, adaptés aux enfants, adultes et personnes à risque. 
      Chaque vaccination est réalisée selon les protocoles les plus récents et en toute sécurité, avec un suivi personnalisé. 
      Notre objectif est de protéger la santé de nos patients tout en offrant des conseils clairs sur la prévention et le maintien d’un système immunitaire optimal.`
  }
];


  getAll() {
    return this.services;
  }

  getById(id: string) {
    return this.services.find(s => s.id === id);
  }
}
