import { Component, Input } from '@angular/core';
import { IdiomasService } from 'src/app/services/idiomas.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {

  @Input()
  title: string = 'pais';
  
  laPalabra: string[] = [];
  @Input()
  translate: string = '';
  @Input()
  clean: string = '';
  consulta: string = '';

  constructor(private paisService: IdiomasService) { }

  get argentina() {
    return this.paisService.argentina;
  }
  get brasil() {
    return this.paisService.brasil;
  }

 traducir(value: string): string[] {
  const unaLetra = value.toLocaleLowerCase();

  for (const letra of unaLetra) {
    const elemento = this.argentina[letra]; 
    this.laPalabra.push(elemento);
  }
  
  this.consulta = '';
  return this.laPalabra;
}

reset() { this.laPalabra = [] }

}
