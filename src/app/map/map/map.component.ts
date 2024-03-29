import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MapService } from 'src/app/libs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  constructor(private mapService:MapService) { }

  ngOnInit(): void {
  }

  save(form:NgForm){
    this.mapService.save(form.value);
  }

}
