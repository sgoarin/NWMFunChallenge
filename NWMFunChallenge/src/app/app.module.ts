import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GetThoseBeastsComponent } from './get-those-beasts/get-those-beasts.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GetThoseBeastsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
