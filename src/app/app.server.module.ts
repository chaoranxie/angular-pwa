import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [NavigationComponent],
})
export class AppServerModule { }
