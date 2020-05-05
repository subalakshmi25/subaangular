import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2/child2.component';
import { Child1Routing } from './child1-routing.module';



@NgModule({
  declarations: [Child2Component],
  imports: [
    CommonModule,
    Child1Routing
  ]
})
export class Child1Module { }
