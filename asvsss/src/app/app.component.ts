import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedcollege = 0;
  selectedcourse = 0;
  courses = [];
  subjects = [];
  selectedLevel;

  onSelectcollege(college_id: number) {
    this.selectedcollege = college_id;
    this.selectedcourse = 0;
    this.subjects = [];
    this.courses = this.getcourses().filter((item) => {
      return item.college_id === Number(college_id)
    });
  }
  onSelectcourse(course_id: number) {
    this.selectedcourse = course_id;
    console.log(
      this.subjects = this.getsubject().filter((item) => {
        return item.course_id === Number(course_id)
      }));
  }

  getcolleges() {
    return [
      { id: 1, name: 'Srividya' },
      { id: 2, name: 'AJ' },
      { id: 3, name: 'SRM' }
    ];
  }

  getcourses() {
    return [
      { id: 1, college_id: 1, name: 'Civil' },
      { id: 2, college_id: 1, name: 'CSE' },
      { id: 3, college_id: 2, name: 'Mech' },
      { id: 4, college_id: 2, name: 'ECE' },
      { id: 5, college_id: 3, name: 'EEE' },
      { id: 6, college_id: 3, name: 'IT' },
    ]
  }

  getsubject() {
    return [
      { id: 1, course_id: 1, name: 'pds' },
      { id: 2, course_id: 1, name: 'java' },
      { id: 3, course_id: 1, name: 'physics' },
      { id: 5, course_id: 2, name: 'Cns' },
      { id: 6, course_id: 2, name: 'EVS' },
      { id: 7, course_id: 2, name: 'c++' },
      { id: 9, course_id: 3, name: 'Mysql' },
      { id: 10, course_id: 3, name: 'Alied' },
      { id: 11, course_id: 3, name: '.NET' },
      { id: 12, course_id: 4, name: 'Python' },
      { id: 13, course_id: 4, name: 'CG' },
      { id: 14, course_id: 5, name: 'EG' },
      { id: 15, course_id: 5, name: 'PDSII' },
      { id: 16, course_id: 5, name: 'soil' },
      { id: 17, course_id: 6, name: 'MechMat' },
      { id: 18, course_id: 6, name: 'Network' },
    ]
  }
}
