import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


export interface City{
  id:number,
  name:string,
  plaka:number,
  region:string
}


@Injectable({
  providedIn: 'root'
})
export class MapService {

  cities=[
  {
    id:1,
    name:"İstanbul",
    region:"Marmara",
    plaka:34
  },
  {
    id:2,
    name:"İzmir",
    region:"Ege",
    plaka:35
  },
  {
    id:3,
    name:"Ankara",
    region:"Anadolu",
    plaka:34
  },
  {
    id:4,
    name:"Kütahya",
    region:"Anadolu",
    plaka:43
  },
  {
    id:5,
    name:"Antalya",
    region:"Akdeniz",
    plaka:7
  },
  {
    id:6,
    name:"Afyon",
    region:"Ege",
    plaka:3
  }
  ]

  public cityNameSubject = new Subject<any>();
  public cityPlakaSubject = new Subject<any>();
  public cityRegionSubject = new Subject<any>();

  private cityNameDataSubject$: BehaviorSubject<any> = new BehaviorSubject([]);
  cityNameDataSubject = this.cityNameDataSubject$.asObservable();

  constructor() { }

  getCityNames(){
    const data = this.cities.map(city=>({
      id:city.id,
      name:city.name
    }))
   // this.cityNameSubject.next(data);
   this.cityNameDataSubject$.next(data);
  }

  getCityPlakas(){
    const data =  this.cities.map(city=>({
      id:city.id,
      name:city.name,
      plaka:city.plaka
    }))
    this.cityPlakaSubject.next(data);
  }

  getCityRegions(){
    const data =  this.cities.map(city=>({
      id:city.id,
      name:city.name,
      region:city.region
    }))
    this.cityRegionSubject.next(data);
  }

  save(value:City){
    const index = this.cities.findIndex(city=>city.id === value.id);

    if (index > -1) {
      this.cities[index] = value;
    } else {
      this.cities.push(value);
    }

    this.getCityNames();
    this.getCityRegions();
    this.getCityPlakas();
  }
}
