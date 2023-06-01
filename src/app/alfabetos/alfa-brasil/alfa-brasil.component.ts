import { Component } from '@angular/core';
import { Idioma } from 'src/app/interfaces/idioma';
import { IdiomasService } from 'src/app/services/idiomas.service';

@Component({
  selector: 'app-alfa-brasil',
  templateUrl: './alfa-brasil.component.html',
  styleUrls: ['./alfa-brasil.component.css']
})
export class AlfaBrasilComponent {

  title: string = 'Alfabeto Brasilero';

  constructor(private alfaBrasilService: IdiomasService) { }

  alfabeto: string[] = this.alfaBrasilService.alfaBrasil;

  

}
