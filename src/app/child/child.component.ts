import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <p>
    routing is working!
  </p>
`,
styles: []
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
