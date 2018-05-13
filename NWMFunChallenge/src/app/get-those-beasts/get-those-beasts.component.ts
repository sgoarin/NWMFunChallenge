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

  public categories: string[] = [];
  public displayedRecords: string[] = [];
  public searchResults: string[] = [];
  searchActive: boolean = false;
  
  backEnabled: boolean = false;
  nextEnabled: boolean = true;

  startIndex: number = 0;
  endIndex: number = 10;
  numberOfrecords: number = 10;

  ngOnInit() {
    this.getData();
  }

  getData() {
      
      this.getThoseBeastsService.getTheBeasts().subscribe
        (
        res => {
          this.categories = res;
          if (this.categories.length < this.numberOfrecords) {
            this.endIndex = this.categories.length;
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

    if (!this.searchActive) {
      this.searchResults = this.categories;
    }

    if (this.searchResults.length > this.endIndex + 1) {
      this.startIndex = this.endIndex;
    }

    if (this.searchResults.length < this.numberOfrecords) {
      this.endIndex = this.searchResults.length;
    }
    else {
      this.endIndex = this.endIndex + 10;
    }

    this.backEnabled = true;
    this.displayedRecords = this.searchResults.slice(this.startIndex, this.endIndex);

    if (this.searchResults.length <= this.endIndex)
    { this.nextEnabled = false; }
    else
    { this.nextEnabled = true; }
  }

  back() {
    this.startIndex = this.startIndex - this.numberOfrecords;
    this.endIndex = this.endIndex - this.numberOfrecords;

    if (this.startIndex == 0)
      this.backEnabled = false;

    if (this.searchResults.length <= this.endIndex) { this.nextEnabled = false; }
    else { this.nextEnabled = true; }

    this.displayedRecords = this.searchResults.slice(this.startIndex, this.endIndex);
  }

  search(searchText: string) {
    this.getThoseBeastsService.getTheBeasts().subscribe
      (
      res => {
        this.categories = res;
        if (this.categories) {
          if (!searchText) {
            this.searchResults = this.categories;

            this.searchActive = false;
            this.startIndex = 0;
            this.endIndex = 10;
            this.displayedRecords = this.searchResults.slice(this.startIndex, this.endIndex);
           
          }
          else {
            searchText = searchText.toLowerCase();
            this.searchActive = true;
            this.searchResults = this.categories.filter(cat => {
              return cat.toLowerCase().startsWith(searchText)
            });
            this.displayedRecords = this.searchResults.slice(0, 10);
          }

          this.backEnabled = false;
          if (this.searchResults.length <= this.endIndex)
          { this.nextEnabled = false; }
            else { this.nextEnabled = true; }
        }
         
      },

      error => {
        console.log("error =" + error);
        //this.spinnerService.hide();
      });

  }

  
  }


