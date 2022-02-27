import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlackListValidator, NoWhiteSpaceValidator, UserNameExistValidator, UserService } from 'src/app/libs';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  registerForm:FormGroup;

  user ={
    firstName:"ceyli",
    age:23
  };
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  save(event:any){
    this.user = event.value;
    console.log("user saved",this.user);
    
  }

  resetForm(){
    this.registerForm = new FormGroup({
      firstName: new FormControl(this.user? this.user.firstName : "",{validators:[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        BlackListValidator('ğ'),
        NoWhiteSpaceValidator
      ],
      asyncValidators: [
        UserNameExistValidator(this.userService)
      ],
      updateOn:"blur"
      }),
      age: new FormControl(this.user? this.user.age : ""),
  });
}

  randomUserName(event:any){
    this.registerForm.patchValue({
      firstName:"test1234"
    });
  }
}