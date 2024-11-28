// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userCredentials = { username: 'usuario', password: 'clave' };

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === this.userCredentials.username && password === this.userCredentials.password) {
      return true;
    }
    return false;
  }
}
