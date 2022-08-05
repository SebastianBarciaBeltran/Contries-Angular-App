import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  public regiones: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];

  public regionResult: Country[] = [];

  public regionActiva: string = '';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (region === this.regionActiva) return;

    this.regionActiva = region;
    this.regionResult = [];

    this.paisService.buscarPorRegion(region).subscribe((res) => {
      this.regionResult = res;
    });
  }

  getClaseCss(region: string) {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
