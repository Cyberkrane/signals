import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lenguaje de señas';
  laPalabra: string[] = [];
  LETRAS_MANOS: any = {
    'a': `../assets/alfabeto brasilero/a.png`,
    'b': `../assets/alfabeto brasilero/b.png`,
    'c': `../assets/alfabeto brasilero/c.png`,
    'd': `../assets/alfabeto brasilero/d.png`,
    'e': `../assets/alfabeto brasilero/e.png`,
    'f': `../assets/alfabeto brasilero/f.png`,
    'g': `../assets/alfabeto brasilero/g.png`,
    'h': `../assets/alfabeto brasilero/h.png`,
    'i': `../assets/alfabeto brasilero/i.png`,
    'j': `../assets/alfabeto brasilero/j.png`,
    'k': `../assets/alfabeto brasilero/k.png`,
    'l': `../assets/alfabeto brasilero/l.png`,
    'm': `../assets/alfabeto brasilero/m.png`,
    'n': `../assets/alfabeto brasilero/n.png`,
    'o': `../assets/alfabeto brasilero/o.png`,
    'p': `../assets/alfabeto brasilero/p.png`,
    'q': `../assets/alfabeto brasilero/q.png`,
    'r': `../assets/alfabeto brasilero/r.png`,
    's': `../assets/alfabeto brasilero/s.png`,
    't': `../assets/alfabeto brasilero/t.png`,
    'u': `../assets/alfabeto brasilero/u.png`,
    'v': `../assets/alfabeto brasilero/v.png`,
    'w': `../assets/alfabeto brasilero/w.png`,
    'x': `../assets/alfabeto brasilero/x.png`,
    'y': `../assets/alfabeto brasilero/y.png`,
    'z': `../assets/alfabeto brasilero/z.png`,
    ' ': `../assets/alfabeto brasilero/espacio.png`,
  };
  consulta?: string;

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


