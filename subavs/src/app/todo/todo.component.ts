import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskData: any = [];

  show: boolean = false;
  todoalue: string;
  taskid: number;

  constructor() {}
  
  //delete method

  delete(taskid) {
    this.taskData = this.taskData.filter(task => {
      if (task.taskid !== taskid) {
        return task;
      }
    });
  }

  //add method

  add(task) {
    this.taskData.push({
      todo: task,
      done: false,
    });
  }

  //edit todoiew

  edit(taskid, todo) {
    this.show = true;
    this.todoalue = todo;
    this.taskid = taskid;
    }
  
  //update task
  
  update(todo) {
      this.taskData.map(task => {
        if (task.taskid === this.taskid) {
          task['todo'] = todo;
        }
      });
  
      this.show = false;
    }

  ngOnInit() {}

}
