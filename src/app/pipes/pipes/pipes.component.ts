import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {


  title="Ankara TürkiyEnin baŞKenTidir."
  today;
  cashValue=1453.22;
  percentVal=25.32;
  turkishUpperCaseVal;
  cityName="İstanbul"
  cash=1500;
  objectVal:Object = {
    foo: "bar",
    baz:"qux",
    nested:{xyz:3, numbers:[1,2,3,4,5]}
  }

  cities = [
    "İstanbul","Antalya","Kocaeli","Bursa","Afyon"
  ]

  constructor() { }

  ngOnInit(): void {
    this.turkishUpperCaseVal = this.title.toLocaleUpperCase("tr-TR");
    this.today=new Date().toDateString();
  }

}
