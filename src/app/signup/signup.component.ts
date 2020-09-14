import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, ) { }

  signupForm: FormGroup;
  ngOnInit() {
    // this.signupForm=this.formBuilder.group({
    //   // 'fieldname':['initialValue',[Array of Validator functions to run for this fomcontral]]
    // })
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4),  CustomValidators.titlecased]],
      lastName: ['', [Validators.required, Validators.pattern("^[A-Za-z]+$")]],
      address: this.formBuilder.group({
        street: ['',[]],
        zip: [99999,[Validators.min(10000),Validators.max(99999)]],
        city: ['',[]]
      })
 });
  }

  signup(){
    console.log(this.signupForm.value);
  }

}
