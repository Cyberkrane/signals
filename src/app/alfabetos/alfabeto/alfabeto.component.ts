import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alfabeto',
  templateUrl: './alfabeto.component.html',
  styleUrls: ['./alfabeto.component.css']
})
export class AlfabetoComponent {
@Input()
  title = '';
@Input()
  alfabeto: string[] = [];
}
