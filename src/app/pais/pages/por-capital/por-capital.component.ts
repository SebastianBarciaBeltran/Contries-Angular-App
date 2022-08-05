import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent implements OnInit {
  paises: Country[] = [];
  errorExist: boolean = false;
  termino: string = '';
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.errorExist = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino).subscribe(
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
    // TODO: crear sugerencia
  }
}
