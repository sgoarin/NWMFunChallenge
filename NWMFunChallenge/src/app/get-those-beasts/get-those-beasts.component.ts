import { Component, OnInit } from '@angular/core';

import { GetThoseBeastsService } from '../get-those-beasts.service';
import { BeastApi } from '../classes/BeastApi';

@Component({
  selector: 'app-get-those-beasts',
  templateUrl: './get-those-beasts.component.html',
  styleUrls: ['./get-those-beasts.component.css']
})
export class GetThoseBeastsComponent implements OnInit {

  constructor(private getThoseBeastsService: GetThoseBeastsService) { }
  searchText: string;
  public categories: string[] = [];

  public displayedRecords: string[] = [];

  startIndex: number = 0;
  endIndex: number = 10;

  ngOnInit() {
    this.getTheBeasts();
  }

  getTheBeasts() {
    
    this.getThoseBeastsService.getTheBeasts().subscribe
      (
      res => {
        this.categories = res;
        console.log(res);
        if (this.categories) {
          if (this.categories.length < 10) {
            this.endIndex = this.categories.length;
          }
        }

        this.displayedRecords = this.categories.slice(this.startIndex, this.endIndex);

        //this.spinnerService.hide();
      },

      error => {
        console.log("error =" + error);
        //this.spinnerService.hide();
      });
  }

  next() {
    if (this.categories.length > this.endIndex + 1) {
      this.startIndex = this.endIndex;
    }
    
    if (this.categories.length < 10) {
      this.endIndex = this.categories.length;
    }
    else {
      this.endIndex = this.endIndex + 10;
    }
    this.displayedRecords = this.categories.slice(this.startIndex, this.endIndex);
  }

  back() {
    this.startIndex = this.startIndex - 10;
    this.endIndex = this.endIndex - 10;
    this.displayedRecords = this.categories.slice(this.startIndex, this.endIndex);
  }
}
