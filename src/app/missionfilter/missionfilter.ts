import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  standalone: false,
  templateUrl: './missionfilter.html',
  styleUrl: './missionfilter.css'
})
export class Missionfilter {
  launchYear: string = '';

  @Output() yearSelected = new EventEmitter<string>();

  onSearch() {
    this.yearSelected.emit(this.launchYear);
  }

  onClear() {
    this.launchYear = '';
    this.yearSelected.emit('');
  }
}
