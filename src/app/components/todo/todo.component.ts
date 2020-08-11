import { Component, OnInit, Input } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TodoService } from '../../services/todo.service'
import {ToDo} from '../../models/todo.model'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() text="";

  list: ToDo[];
  
  constructor(public toDoService: TodoService) {
    toDoService.getTodo()
        .subscribe(todo =>{console.log("Effect"); this.list = todo});
  }

  ngOnInit(): void {

  }

  addTodo():void {
    this.toDoService.add(this.text);
    this.text="";
  }
}
