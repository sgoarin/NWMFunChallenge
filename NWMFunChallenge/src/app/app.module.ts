import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GetThoseBeastsComponent } from './get-those-beasts/get-those-beasts.component';
import { GetThoseBeastsService } from './get-those-beasts.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Interceptor } from './classes/interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GetThoseBeastsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetThoseBeastsService,
    ConfigurationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
