import { Component } from '@angular/core';
import { IdiomasService } from 'src/app/services/idiomas.service';

@Component({
  selector: 'app-alfa-argentina',
  templateUrl: './alfa-argentina.component.html',
  styleUrls: ['./alfa-argentina.component.css']
})
export class AlfaArgentinaComponent {

  title: string = 'Alfabeto Argentino';

  constructor(private alfaAgentinaService: IdiomasService) { }

  alfabeto: string[] = this.alfaAgentinaService.alfaArgentina;
}
