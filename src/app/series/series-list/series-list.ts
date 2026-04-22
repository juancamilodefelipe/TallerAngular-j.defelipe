import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Serie } from '../serie.model';
import { SeriesService } from '../series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.html',
  styleUrls: ['./series-list.css'],
  standalone: false
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;
  selectedSerie: Serie | null = null;

  constructor(
    private seriesService: SeriesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe({
      next: (data) => {
        this.series = data;
        this.calculateAverageSeasons();

        if (this.series.length > 0) {
          this.selectedSerie = this.series[0];
        }

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar series:', error);
      }
    });
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

  calculateAverageSeasons(): void {
    let total = 0;

    for (let serie of this.series) {
      total += serie.seasons;
    }

    this.averageSeasons = this.series.length > 0 ? total / this.series.length : 0;
  }
}