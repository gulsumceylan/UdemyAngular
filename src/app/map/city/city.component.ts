import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/libs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  citiesData;
  citiesData$;

  constructor(private mapService:MapService) {
    //mapService.cityNameSubject.subscribe(data=>{
    //  this.citiesData=data;
    //})
    this.citiesData$=mapService.cityNameDataSubject;
   }

  ngOnInit() {
    this.mapService.getCityNames();
  }

}
