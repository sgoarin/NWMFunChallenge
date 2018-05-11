import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GetThoseBeastsComponent } from './get-those-beasts/get-those-beasts.component';
import { GetThoseBeastsService } from './get-those-beasts.service';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { Interceptor } from './classes/interceptor';
import { ConfigurationService } from './configuration.service';
import { FilterPipe } from './classes/FilterPipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GetThoseBeastsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetThoseBeastsService    //ConfigurationService,
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: Interceptor,
    //  multi: true
    //},


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
