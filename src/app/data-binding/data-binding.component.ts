import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user= {
    name: "Gülsüm",
    surname: "Ceylan",
    job: "software Developer",
    favorite_place: "Kız kulesi",
    img:"xxxxxxxxxxxxxxxx",
    isEditable: false
  }; 

  type="text";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    alert("clicked");
  }

  inputSubmit(value:any){
    alert(value.target.value +" geldi");
  }
}
