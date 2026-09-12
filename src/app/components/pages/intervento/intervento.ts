import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {normalizzaStringa, resolveColorVariable} from '../../../utils';

@Component({
  selector: 'sheldon-intervento',
  templateUrl: './intervento.html',
  styleUrl: './intervento.scss',
})
export default class Intervento implements OnInit {
  private readonly route = inject(ActivatedRoute);
  protected readonly apiService = inject(ProjectsApiService);

  protected readonly formatter = new Intl.NumberFormat(navigator.language);

  protected interventoId = signal<string>('');

  protected intervento = computed(() =>
    this.apiService.interventi().find(i => i.id === this.interventoId())
  );

  /** Solid accent color derived from the intervento's categoria, used as the page background. */
  protected categoriaColor = computed<string>(() => {
    const categoria = this.intervento()?.categoria;
    if (!categoria) return '#000';
    return resolveColorVariable(`--color-gradient-${normalizzaStringa(categoria)}-end`);
  });

  constructor() {
    this.route.params.subscribe(params => {
      this.interventoId.set(params['id']);
    });
  }

  ngOnInit(): void {
    this.apiService.getInterventi();
  }
}
