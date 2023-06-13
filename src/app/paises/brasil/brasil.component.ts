import { Component } from '@angular/core';

@Component({
  selector: 'app-brasil',
  templateUrl: './brasil.component.html',
  styleUrls: ['./brasil.component.css']
})
export class BrasilComponent {

  title = 'Eu quero traduzir esta palavra:';
  translate: string = 'traduzir';
  clean: string = 'excluir';

}
