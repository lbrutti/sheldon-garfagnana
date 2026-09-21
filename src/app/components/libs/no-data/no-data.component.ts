import {Component, inject, input, OnInit, signal} from '@angular/core';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {TranslocoModule} from '@jsverse/transloco';

@Component({
  selector: 'sheldon-no-data',
  imports: [MatIcon, TranslocoModule],
  templateUrl: './no-data.component.html',
  styleUrl: './no-data.component.scss',
})
export default class NoDataComponent implements OnInit {
  /** Overrides the default localized message. */
  message = input<string>('');

  private readonly iconRegistry = inject(MatIconRegistry);
  /** True once the registered sheldon-no-data svg icon has loaded; falls back to the "inbox" ligature otherwise. */
  protected readonly iconAvailable = signal(false);

  ngOnInit(): void {
    this.iconRegistry.getNamedSvgIcon('sheldon-no-data').subscribe({
      next: () => this.iconAvailable.set(true),
      error: () => this.iconAvailable.set(false),
    });
  }
}
