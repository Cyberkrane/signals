import { Component } from '@angular/core';
import { IdiomasService } from 'src/app/services/idiomas.service';

@Component({
  selector: 'app-brasil',
  templateUrl: './brasil.component.html',
  styleUrls: ['./brasil.component.css']
})
export class BrasilComponent {

  title = 'Eu quero traduzir esta palavra:';
  translate: string = 'traduzir';
  clean: string = 'excluir';

  laPalabra: string[] = [];
  brasil = this.idiomasService.brasil;
  consulta?: string;
  
  constructor(public idiomasService: IdiomasService) {}
  
  traducir(value: string): string[] {
    const unaLetra = value.toLowerCase();
  
    for (const letra of unaLetra) {
      const elemento = this.brasil[letra];
      this.laPalabra.push(elemento);
    }
    
    this.consulta = '';
    return this.laPalabra;
  }
  
  reset() {
    this.laPalabra = [];
  }
}
