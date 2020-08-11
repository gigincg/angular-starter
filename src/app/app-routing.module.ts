import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { ShrtComponent } from './components/shrt/shrt.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app', component: ToDoComponent },
  { path: 'shrt', component: ShrtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
