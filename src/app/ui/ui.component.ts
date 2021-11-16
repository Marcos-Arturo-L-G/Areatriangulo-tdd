import { Component, OnInit } from '@angular/core';
import { areaT }from "../areaT/areaT"

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = 0;
  base = 0;
  altura = 0;

  ngOnInit() {
  }

  areaT() {
    let myresult = 0;
    myresult = areaT(this.base, this.altura);
    this.result = myresult;
  }
}