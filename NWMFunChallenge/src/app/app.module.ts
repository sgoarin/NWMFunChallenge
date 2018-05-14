import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    Ng4LoadingSpinnerModule.forRoot() 
  ],
  providers: [DataService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
