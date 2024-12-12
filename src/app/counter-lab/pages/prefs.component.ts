import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <h3>Count By:</h3>
      <ul>
        <li><button>1</button></li>
        <li><button>2</button></li>
        <li><button>3</button></li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {}
