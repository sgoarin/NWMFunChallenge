import { Component, OnInit } from '@angular/core';
import { GetThoseBeastsService } from '../get-those-beasts.service';
import { BeastApi } from '../classes/BeastApi';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private gtbservice: GetThoseBeastsService) {  }

  public beastApis: BeastApi[] = [];

  ngOnInit() {
    
  }
   
}
