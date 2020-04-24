import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vs';


  users = [{name: 'suba', age: 21, gender: 'female' },
           {name: 'sundar', age: 20, gender: 'male'},
           {name: 'ananthi', age: 28, gender: 'female'},
           {name: 'vijayakumar', age: 31, gender: 'male' },
           {name: 'guru', age: 29, gender:'male'}]
}
