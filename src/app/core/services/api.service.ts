import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor() {}

  get<T>(url: string): Promise<T> {
    return fetch(url).then(res => res.json());
  }

  post<T>(url: string, body: any): Promise<T> {
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(res => res.json());
  }
}
