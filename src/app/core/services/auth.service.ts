import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string | null = null;

  login(username: string, password: string) {
    this.token = 'fake-token';
  }

  logout() { this.token = null; }

  isAuthenticated(): boolean { return !!this.token; }
}
