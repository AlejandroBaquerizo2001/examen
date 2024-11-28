import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HuaconGregoryLoginComponent } from "./huacon-gregory-login/huacon-gregory-login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HuaconGregoryLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HuaconRamirezExamen';
}
