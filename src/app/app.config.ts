import { ApplicationConfig, inject, isDevMode, provideBrowserGlobalErrorListeners, provideAppInitializer } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';

import { routes } from './app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideTranslocoMessageformat } from '@jsverse/transloco-messageformat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(() => {
      const iconRegistry = inject(MatIconRegistry);
      const sanitizer = inject(DomSanitizer);
      iconRegistry.addSvgIcon('sheldon-info', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/info.svg'));
      iconRegistry.addSvgIcon('sheldon-download', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/download.svg'));
      iconRegistry.addSvgIcon('sheldon-share', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/share.svg'));
    }),
    provideAnimations(),
    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['it'],
        defaultLang: 'it',
        // App is Italian-only: no runtime language switching.
        reRenderOnLangChange: false,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideTranslocoMessageformat(),
  ],
};
