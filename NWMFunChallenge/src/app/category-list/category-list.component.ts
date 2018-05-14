import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private dataService: DataService, private spinnerService: Ng4LoadingSpinnerService) { }

  public categories: string[] = [];
  public displayedRecords: string[] = [];
  public searchResults: string[] = [];
  searchActive: boolean = false;
  backEnabled: boolean = false;
  nextEnabled: boolean = true;
  startIndex: number = 0;
  endIndex: number = 10;
  numberOfrecords: number = 10;

  sortOrder: number = 1;

  ngOnInit() {
    this.spinnerService.show();
    this.dataService.getData().subscribe
      (
      res => {
        console.log(res);
        this.categories = res;
        if (this.categories.length < this.numberOfrecords) {
          this.endIndex = this.categories.length;
        }
        this.displayedRecords = this.categories.slice(this.startIndex, this.endIndex);
      },

      error => {
        console.log("error =" + error);
      });
    this.spinnerService.hide();
  }

  next() {
    this.spinnerService.show();
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
    this.displayData();

    if (this.searchResults.length <= this.endIndex) { this.nextEnabled = false; }
    else { this.nextEnabled = true; }
    this.spinnerService.hide();
  }

  back() {
    this.spinnerService.show();
    this.startIndex = this.startIndex - this.numberOfrecords;
    this.endIndex = this.endIndex - this.numberOfrecords;

    if (this.startIndex == 0)
      this.backEnabled = false;

    if (this.searchResults.length <= this.endIndex) { this.nextEnabled = false; }
    else { this.nextEnabled = true; }

    this.displayData();
    this.spinnerService.hide();
  }

  search(searchText: string) {

    this.startIndex = 0;
    this.endIndex = 10;

    if (this.categories) {
      if (!searchText) {
        this.searchResults = this.categories;
        this.searchActive = false;
      }
      else {
        searchText = searchText.toLowerCase();
        this.searchActive = true;
        this.searchResults = this.categories.filter(cat => {
          return cat.toLowerCase().startsWith(searchText)
        });
      }
      this.displayData();

      this.backEnabled = false;
      if (this.searchResults.length <= this.endIndex) { this.nextEnabled = false; }
      else { this.nextEnabled = true; }
    }
    this.spinnerService.hide();
  }

  sort() {
    this.spinnerService.show();


    this.sortOrder = this.sortOrder * -1;

    if (!this.searchActive) {
      this.searchResults = this.categories;
    }

    if (this.sortOrder > 0) {
      this.searchResults.sort();
    }
    else {
      this.searchResults.reverse();
    }
    this.startIndex = 0;
    this.endIndex = 10;

    this.displayData();

    this.spinnerService.hide();
  }

  reset(searchValue: string) {
    if (!searchValue) {
      this.search(null);
    }
  }

  displayData() {
    this.displayedRecords = this.searchResults.slice(this.startIndex, this.endIndex);
  }


}


