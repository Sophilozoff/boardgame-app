import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//ici on désigne le AppModule comme module racine et qu'on veut démarrer dans un navigateur
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
