import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if( environment.block_debugger ) {
  console.log = () => {} // Eliminar logs en producción
} else {
    console.log(`

      ██████╗ ██████╗  ██████╗ ██╗   ██╗███████╗ ██████╗████████╗
      ██╔══██╗██╔══██╗██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝╚══██╔══╝
      ██████╔╝██████╔╝██║   ██║ ╚████╔╝ █████╗  ██║        ██║
      ██╔═══╝ ██╔══██╗██║   ██║  ╚██╔╝  ██╔══╝  ██║        ██║
      ██║     ██║  ██║╚██████╔╝   ██║   ███████╗╚██████╗   ██║
      ╚═╝     ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚══════╝ ╚═════╝   ╚═╝

    ______________________________________`);

  console.log(
  '%c¡DETENTE!',
  ' font-weight: bold; color: red; font-size: 45px'
  );
  console.log(
  '%cEsta función del navegador esta pensada para desarrolladores.' +
  ' Si alguien te indico que copiaras y pegaras algo aqui para habilitar una función de MOVII ' +
  'o para PIRATEAR la cuenta de alguien, se trata de un fraude.',
  'font-family: Arial;, serif; color: gray; font-size: 20px');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
