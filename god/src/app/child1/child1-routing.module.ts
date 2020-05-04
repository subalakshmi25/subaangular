import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child2Component } from './child2/child2.component';


const routes: Routes = [
    {path:'', component: Child2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class child1Routing { }
