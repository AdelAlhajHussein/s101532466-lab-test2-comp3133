import { Component, Input } from '@angular/core';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  standalone: false,
  templateUrl: './missiondetails.html',
  styleUrl: './missiondetails.css'
})
export class Missiondetails {
  @Input() mission!: Mission;
}
