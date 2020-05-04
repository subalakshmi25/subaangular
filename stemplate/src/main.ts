import {
  NgModule,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

class Signup {
constructor(public firstName: string = '',
            public lastName: string = '',
            public email: string = '',
            public password: string = '',
            public course: string = '') {
}
}


@Component({
selector: 'signup-form',
templateUrl:'main.html' ,
styleUrls:['main.css']

})
class FormComponent {

model: Signup = new Signup();
@ViewChild('f') form: any;

cours: string[] = [
  'MBBS',
  'B.E',
  'ARTS',
];

onSubmit() {
  if (this.form.valid) {
    console.log("Form Submitted!");
    this.form.reset();
  }
}
}

@Component({
selector: 'app-root',
template: `<signup-form></signup-form>`
})
class AppComponent {
}


@NgModule({
imports: [
  BrowserModule,
  FormsModule
],
declarations: [
  AppComponent,
  FormComponent
],
bootstrap: [
  AppComponent
],
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);