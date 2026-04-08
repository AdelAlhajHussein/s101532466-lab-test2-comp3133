import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpacexapiService } from '../spacexapi';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  standalone: false,
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css'
})
export class Missionlist implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  selectedMission?: Mission;

  constructor(
    private spacexService: SpacexapiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.spacexService.getMissions().subscribe({
      next: (data: Mission[]) => {
        this.missions = data;
        this.filteredMissions = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }

  filterByYear(year: string): void {
    if (!year) {
      this.filteredMissions = this.missions;
    } else {
      this.filteredMissions = this.missions.filter(
        (mission) => mission.launch_year?.toString() === year
      );
    }
    this.selectedMission = undefined;
  }

  selectMission(mission: Mission): void {
    this.selectedMission = mission;
  }
}
