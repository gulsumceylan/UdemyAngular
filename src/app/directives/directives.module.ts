import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HighlightDirective } from '../libs';

const routes: Routes = [
  {path:"", component:DirectivesComponent},

];

@NgModule({
  declarations: [
    DirectivesComponent, HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class DirectivesModule { }
