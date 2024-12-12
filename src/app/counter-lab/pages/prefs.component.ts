import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prefs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prefs.component.html',
  styleUrls: ['./prefs.component.css'],
})
export class PrefsComponent {
  incrementOptions = [1, 3, 5];
  selectedOption = 1;

  selectOption(option: number) {
    this.selectedOption = option;
  }
}
