import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-huacon-gregory-login',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink],
  templateUrl: './huacon-gregory-login.component.html',
  styleUrl: './huacon-gregory-login.component.css'
})
export class HuaconGregoryLoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    const isLoggedIn = this.authService.login(this.username, this.password);
    this.message = isLoggedIn ? 'Inicio de sesión exitoso' : 'Credenciales incorrectas';
  }
}
