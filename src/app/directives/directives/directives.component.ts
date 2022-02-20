import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  title=false;
  name="";
  userName="";

  color="";

  cities=[
    {id:1,
    name:'İstanbul',
    region:'Marmara'
    },
    {id:6,
      name:'Ankara',
      region:'İç A'
      },
      {id:7,
        name:'İzmir',
        region:'Ege'
        },
        {id:9,
          name:'Adana',
          region:'Akdeniz'
          },
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(){
    this.title=!this.title;
  }

}
