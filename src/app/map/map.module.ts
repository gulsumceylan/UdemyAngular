import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { CityComponent } from './city/city.component';
import { RegionComponent } from './region/region.component';
import { PlakaComponent } from './plaka/plaka.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MapService } from '../libs';

const routes: Routes = [
  {path:"", component:MapComponent},

];

@NgModule({
  declarations: [
    MapComponent,
    CityComponent,
    RegionComponent,
    PlakaComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes), FormsModule
  ],
  providers:[MapService]
})
export class MapModule { }
