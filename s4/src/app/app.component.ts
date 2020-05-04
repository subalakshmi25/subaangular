import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

    this.signupForm();

  }
  signupForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  } 
  onSubmit() {
    console.log('reactiveForm' , this.reactiveForm.value);

  }
  
  get name() { return this.reactiveForm.get('name'); }
  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }
  
}