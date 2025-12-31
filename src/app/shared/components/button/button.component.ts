import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button class="app-btn"><ng-content></ng-content></button>`,
  styles: ['.app-btn{padding:.5rem 1rem;border-radius:4px;background:#2563eb;color:#fff;border:none}']
})
export class ButtonComponent {}
