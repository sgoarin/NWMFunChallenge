import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GetThoseBeastsComponent } from './get-those-beasts/get-those-beasts.component';
import { GetThoseBeastsService } from './get-those-beasts.service';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConfigurationService } from './configuration.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GetThoseBeastsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    Ng4LoadingSpinnerModule.forRoot() 
  ],
  providers: [GetThoseBeastsService    //ConfigurationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
