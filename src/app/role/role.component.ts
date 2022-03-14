import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RoleService } from '../libs';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, OnDestroy{

  rolesData;
  subs1:Subscription;
  subs2:Subscription;

  constructor(private roleService:RoleService) { }


  ngOnInit(): void {
    this.getAllRoles();
  }

  ngOnDestroy(): void {
    this.subs1.unsubscribe();
    this.subs2.unsubscribe();
  }

  getAllRoles(){
   this.subs1 =  this.roleService.getAllRoles().subscribe(data=>{
     this.rolesData=data;
   })
  }

  addNewRole(roleForm:NgForm){
    //this.subs2 = this.roleService.addRole(roleForm.value).subscribe(data=>{
    //  this.getAllRoles();
    //},errror=>{
    //  alert("something went wrong!")
    //})

    this.subs1.add(
      this.subs2 = this.roleService.addRole(roleForm.value).subscribe(data=>{
        this.getAllRoles();
      },errror=>{
        alert("something went wrong!")
      })
    )
  }

  editRole(roleForm:NgForm){
    this.roleService.editRole(roleForm.value).subscribe(data=>{
      this.getAllRoles();
    },errror=>{
      alert("something went wrong!")
    })
  }

  deleteRole(roleForm:NgForm){
    this.roleService.deleteRole(roleForm.value).subscribe(data=>{
      this.getAllRoles();
    },errror=>{
      alert("something went wrong!")
    })
  }

}
