import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { animateTeam } from '../../animations';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  shortDesc: string;
  longDesc: string;
  modalOpen?: boolean;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements AfterViewInit {

  team: TeamMember[] = [
    {
      id: 'member1',
      name: 'Dr. Marie Dupont',
      role: 'Médecin Généraliste',
      photo: '/assets/images/doctor-team.jpg',
      shortDesc: 'Suivi régulier et consultations courantes.',
      longDesc: 'Dr. Marie Dupont assure le suivi médical général, diagnostics et conseils personnalisés pour toute la famille.'
    },
    {
      id: 'member2',
      name: 'Jean Martin',
      role: 'Kinésithérapeute',
      photo: '/assets/images/kine-team.jpg',
      shortDesc: 'Rééducation et prévention physique.',
      longDesc: 'Jean Martin propose des séances de kinésithérapie adaptées aux besoins spécifiques de chaque patient.',
      modalOpen: false
    },
    {
      id: 'member3',
      name: 'Dr. Sophie Bernard',
      role: 'Infirmière',
      photo: '/assets/images/infi.jpg',
      shortDesc: 'Soins et accompagnement des patients.',
      longDesc: 'Dr. Sophie Bernard prend en charge les soins infirmiers et assure un suivi attentif et personnalisé.',
      modalOpen: false
    }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    animateTeam();
  }

}
