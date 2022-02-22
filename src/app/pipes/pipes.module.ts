import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';
import { IgxButtonModule } from 'igniteui-angular';
import { MyFilteringPipe, TlPipe } from '../libs';


const routes: Routes = [
  {path:"", component:PipesComponent},

];


@NgModule({
  declarations: [
    PipesComponent, TlPipe,MyFilteringPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IgxButtonModule,
  ]
})
export class PipesModule { }
