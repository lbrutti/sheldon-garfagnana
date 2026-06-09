import {Component, input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {shuffleArray} from '../../../utils';

@Component({
  selector: 'sheldon-fullscreen-loader',
  standalone: true,
  templateUrl: './fullscreen-loader.component.html',
  styleUrl: './fullscreen-loader.component.scss',
})
export default class FullscreenLoaderComponent implements OnInit {
  readonly spinnerSrc = input<string>('assets/svg/info.svg');
  readonly visible = input<boolean>(false);

  protected gradientStyle = '';

  ngOnInit(): void {
    const cat = shuffleArray([...environment.categorie])[0];
    this.gradientStyle = `linear-gradient(135deg, var(--color-gradient-${cat}-start), var(--color-gradient-${cat}-end))`;
  }
}
