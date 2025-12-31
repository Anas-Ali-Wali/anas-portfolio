import { Component } from '@angular/core';

interface NavLink {
  name: string;
  route: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
