import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  issuer = 'JAM WEB DEV';

  greet() {
    alert('Hello World!');
  }

  changeIssuer() {
    this.issuer = "Julián Andrés Mosquera";
  }
}
