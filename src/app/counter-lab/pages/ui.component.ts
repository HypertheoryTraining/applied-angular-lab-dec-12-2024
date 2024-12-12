import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css'],
})
export class UiComponent {
  count = signal(0);

  canDecrement = computed(() => this.count() > 0);

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    if (this.canDecrement()) {
      this.count.update((value) => value - 1);
    }
  }
}
