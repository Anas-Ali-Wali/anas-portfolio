import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<div class="card"><ng-content></ng-content></div>`,
  styles: ['.card{padding:1rem;border:1px solid #e5e7eb;border-radius:8px;background:#fff}']
})
export class CardComponent {}
