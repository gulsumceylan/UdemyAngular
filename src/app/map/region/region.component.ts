import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/libs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  regionsData;

  constructor(private mapService:MapService) {
     mapService.cityRegionSubject.subscribe(data=>{
      this.regionsData=data;
     })
   }

  ngOnInit() {
    this.mapService.getCityRegions();
  }

}
