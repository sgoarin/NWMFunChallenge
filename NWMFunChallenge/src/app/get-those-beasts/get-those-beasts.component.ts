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
  numberOfrecords: number = 10;

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
          if (this.categories.length < this.numberOfrecords) {
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

    if (this.categories.length < this.numberOfrecords) {
      this.endIndex = this.categories.length;
    }
    else {
      this.endIndex = this.endIndex + 10;
    }
    this.displayedRecords = this.categories.slice(this.startIndex, this.endIndex);
  }

  back() {
    this.startIndex = this.startIndex - this.numberOfrecords;
    this.endIndex = this.endIndex - this.numberOfrecords;
    this.displayedRecords = this.categories.slice(this.startIndex, this.endIndex);
  }

  search(searchText: string) {

    

      console.log("search = " + searchText);

    this.getThoseBeastsService.getTheBeasts().subscribe
      (
      res => {
        this.categories = res;

        if (!searchText) {

          this.displayedRecords =  this.categories;
        }

        if (this.categories) {
          
          this.displayedRecords = this.categories.filter(cat => {
            return cat.toLowerCase().startsWith(searchText)
          });
          console.log(this.displayedRecords);
        }

        //this.displayedRecords = this.categories.slice(this.startIndex, this.endIndex);

        //this.spinnerService.hide();
      },

      error => {
        console.log("error =" + error);
        //this.spinnerService.hide();
      });

    }
    //this.getThoseBeastsService.getTheBeasts().subscribe
    //  (
    //  res => {
    //    this.categories = res;

    //    this.displayedRecords.filter(cat => {
    //      cat.toLowerCase().contains(searchText)
    //    });
    //  },
        //console.log("results =" + this.displayedRecords);
        //if (this.categories) {
        //  if (this.categories.length < this.numberOfrecords) {
        //    this.endIndex = this.categories.length;
        //  }
        //}

        //this.displayedRecords = this.categories.slice(this.startIndex, this.endIndex);

      
  }


