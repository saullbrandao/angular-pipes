import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css'],
})
export class ExemplosPipesComponent implements OnInit {
  livro = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };

  filtro: string = '';

  livros: string[] = ['Angular', 'Java'];

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = interval(2000).pipe(map(() => 'Valor assíncrono 2'));

  addCurso(valor: string) {
    this.livros.push(valor);
  }

  obterLivros() {
    if (
      this.livros.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      return this.livros;
    }

    return this.livros.filter(
      (v: string) => v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
