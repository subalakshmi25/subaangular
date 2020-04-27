import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  myData;
  total = 0;
  counter = 10;


  users = [];

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  GetData() {
    this.http.get<any[]>(this.apiUrl)
      .subscribe(data => {
        this.users = data;
      });
  }

  ClearData() {
    this.users = [];
  }

  
  postData() {
    this.counter++;
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const myPost = {
      user: 'me',
      id: this.counter,
      title: 'post number' + this.counter,
      body: ''
    }
    return this.http.post(url, myPost)
      .subscribe(
        (resp) => {
          console.log(resp);
        }
      );
  }
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  


}

  

