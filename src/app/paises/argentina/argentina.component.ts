import { Component } from '@angular/core';
import { IdiomasService } from 'src/app/services/idiomas.service';

@Component({
  selector: 'app-argentina',
  templateUrl: './argentina.component.html',
  styleUrls: ['./argentina.component.css']
})
export class ArgentinaComponent {

  title: string = 'Quiero traducir esta palabra:';
  translate: string = 'traducir';
  clean: string = 'borrar';

  laPalabra: string[] = [];
  
  argentina = this.idiomasService.argentina;
  
  consulta?: string;
  
  constructor(public idiomasService: IdiomasService) {}
  
  traducir(value: string): string[] {
    const unaLetra = value.toLowerCase();
  
    for (const letra of unaLetra) {
      const elemento = this.argentina[letra];
      this.laPalabra.push(elemento);
    }
    
    this.consulta = '';
    return this.laPalabra;
  }
  
  reset() {
    this.laPalabra = [];
  }
}
