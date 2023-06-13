import { Component } from '@angular/core';

@Component({
  selector: 'app-argentina',
  templateUrl: './argentina.component.html',
  styleUrls: ['./argentina.component.css']
})
export class ArgentinaComponent {

  title: string = 'Quiero traducir esta palabra:';
  translate: string = 'traducir';
  clean: string = 'borrar';

  paisSelecionado: string = 'Argentina';

}
