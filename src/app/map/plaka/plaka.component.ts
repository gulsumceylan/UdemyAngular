import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/libs';

@Component({
  selector: 'app-plaka',
  templateUrl: './plaka.component.html',
  styleUrls: ['./plaka.component.scss']
})
export class PlakaComponent implements OnInit {

  plakasData;

  constructor(private mapService:MapService) {
    mapService.cityPlakaSubject.subscribe(data=>{
      this.plakasData=data;
    })
   }

  ngOnInit() {
    this.mapService.getCityPlakas();
  }

}
