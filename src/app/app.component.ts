import { Component } from '@angular/core';
import { IdiomasService } from './services/idiomas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lenguaje de señas';
  laPalabra: string[] = [];
  LETRAS_MANOS = this.idiomasService.LETRAS_MANOS;

  consulta?: string;

  constructor(public idiomasService: IdiomasService) {
  }

  traducir(value: string) {

    this.laPalabra = [];
    const unaLetra = value.toLowerCase();

    for (let i = 0; i < unaLetra.length; i++) {
      let elemento = this.LETRAS_MANOS[unaLetra[i]];
      this.laPalabra?.push(elemento);
    }
    this.consulta = '';
    return this.laPalabra;

  }

  reset() {
    this.laPalabra = [];
  }


}


