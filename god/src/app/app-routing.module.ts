import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child2Component } from './child2/child2.component';



const routes: Routes = [
  {path: '', redirectTo: "/child2", pathMatch:'full'},
  {path: 'child1', loadChildren: './child1/child1.module#Child1Module'},
  {path: 'child2', component: Child2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
