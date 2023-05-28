import { Injectable } from '@angular/core';
import { Idioma } from '../interfaces/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  constructor() { }

  brasil: Idioma = {
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
  argentina: Idioma = {
    'a': `../assets/abc argentina/a.png`,
    'b': `../assets/abc argentina/b.png`,
    'c': `../assets/abc argentina/c.png`,
    'ch': `../assets/abc argentina/ch.png`,
    'd': `../assets/abc argentina/d.png`,
    'e': `../assets/abc argentina/e.png`,
    'f': `../assets/abc argentina/f.png`,
    'g': `../assets/abc argentina/g.png`,
    'h': `../assets/abc argentina/h.png`,
    'i': `../assets/abc argentina/i.png`,
    'j': `../assets/abc argentina/j.png`,
    'k': `../assets/abc argentina/k.png`,
    'l': `../assets/abc argentina/l.png`,
    'll': `../assets/abc argentina/ll.png`,
    'm': `../assets/abc argentina/m.png`,
    'n': `../assets/abc argentina/n.png`,
    'ñ': `../assets/abc argentina/ñ.png`,
    'o': `../assets/abc argentina/o.png`,
    'p': `../assets/abc argentina/p.png`,
    'q': `../assets/abc argentina/q.png`,
    'r': `../assets/abc argentina/r.png`,
    's': `../assets/abc argentina/s.png`,
    't': `../assets/abc argentina/t.png`,
    'u': `../assets/abc argentina/u.png`,
    'v': `../assets/abc argentina/v.png`,
    'w': `../assets/abc argentina/w.png`,
    'x': `../assets/abc argentina/x.png`,
    'y': `../assets/abc argentina/y.png`,
    'z': `../assets/abc argentina/z.png`,
    ' ': `../assets/alfabeto brasilero/espacio.png`,
  }
}
