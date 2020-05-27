import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  public value: string;
isdropdown:true;
  colleges: any = [
    {
      name: "sri vidya",
    },
    {
      name: "kamaraj",
    },
    {
      name: "AJ",
    }
  ];

  departmentchange(dept) {
    switch (dept) {
    case "sri vidya":
    this.colleges = [];
    this.colleges = [{ name: "ECE" }, { name: "CSE" }]
    this.isdropdown=true;
    break;
    case "kamaraj":
    this.colleges = [];
    this.colleges = [{ name: "AERONAUTICS" }, { name: "MECH" }]
    this.isdropdown=true;
    break;
    case "AJ":
    this.colleges = [];
    this.colleges = [{ name: "ELECTRICAL" }, { name: "BCA" }]
    this.isdropdown=true;
    break;
  }
  console.log(dept);
}
public text: string;
onClick(){
  console.log(this.text);
}
}

