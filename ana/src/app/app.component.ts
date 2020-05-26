import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  public data: { [key: string]: Object }[] = [
    {
      id: '1', course: 'BCA',
      subjects: [
        { id: '1-1', course: 'java' },
        { id: '1-2', course: 'C' },
        { id: '1-3', course: 'c++' }
      ]
    },
    {
      id: '2', course: 'COMPUTER',
      subjects: [
        { id: '2-1', course: 'network' },
        { id: '2-2', course: 'compiler' },
        { id: '2-3', course: 'software' }

      ]
    },
    {
      id: '3', course: 'CIVIL',
      subjects: [
        { id: '3-1', course: 'soilmech' },
        { id: '3-2', course: 'electrical' },
        { id: '3-3', course: 'cadlab' },
      ]
    },
  ];
  public fields: Object = { dataSource: this.data, value: 'id', text: 'course', child: 'subjects' };
}



