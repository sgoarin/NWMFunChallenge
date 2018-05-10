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

  public beastApis: BeastApi[] = [];

  ngOnInit() {
    this.getTheBeasts("");
  }

  getTheBeasts(term: string) {
    this.getThoseBeastsService.getTheBeasts(term).subscribe
      (
      res => {
        this.beastApis = res;
        console.log(this.beastApis);

        //this.spinnerService.hide();
      },

      error => {
        console.log("error =" + error);
        //this.spinnerService.hide();
      });
  }

}
