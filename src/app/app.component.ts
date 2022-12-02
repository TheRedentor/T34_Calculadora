import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T34_Calculadora';

  pantalla: any = "";
  resultado: any = "";

  sumar() {
    this.pantalla += "+";
  }
  restar() {
    this.pantalla += "-";
  }
  multiplicar() {
    this.pantalla += "*";
  }
  dividir() {
    this.pantalla += "/";
  }
  igual() {
    this.resultado = eval(this.pantalla);
  }
  borrar() {
    this.pantalla = "";
  }
  punto() {
    this.pantalla += ".";
  }
  uno() {
    this.pantalla += "1";
  }
  dos() {
    this.pantalla += "2";
  }
  tres() {
    this.pantalla += "3";
  }
  cuatro() {
    this.pantalla += "4";
  }
  cinco() {
    this.pantalla += "5";
  }
  seis() {
    this.pantalla += "6";
  }
  siete() {
    this.pantalla += "7";
  }
  ocho() {
    this.pantalla += "8";
  }
  nueve() {
    this.pantalla += "9";
  }
  cero() {
    this.pantalla += "0";
  }
  dobleCero() {
    this.pantalla += "00";
  }
}

