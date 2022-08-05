import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  errorExist: boolean = false;
  termino: string = '';
  isVisibleSugerencias: boolean = false;
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.errorExist = false;
    this.isVisibleSugerencias = false;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe(
      (res) => {
        this.paises = res;
      },
      (err) => {
        this.errorExist = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.errorExist = false;
    this.termino = termino;
    this.isVisibleSugerencias = true;

    this.paisService.buscarPais(termino).subscribe(
      (res) => {
        this.paisesSugeridos = res.splice(0, 3);
      },
      (err) => {
        this.paisesSugeridos = [];
      }
    );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
