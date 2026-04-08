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

  constructor(
    private spacexService: SpacexapiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit running');

    this.spacexService.getMissions().subscribe({
      next: (data: Mission[]) => {
        console.log('API data received:', data);
        this.missions = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
}
