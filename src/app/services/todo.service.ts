import { Injectable } from '@angular/core';
import ArrayUtils from '../utils/ArrayUtils';

import { Observable, of } from 'rxjs';

import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo:ToDo[] = [
    {name: "The First Task", done: true},
    {name: "Another Task", done: false}
  ];

  constructor() { }

  getTodo(): Observable<ToDo[]> {
    return of(this.todo);
  }


  add(text: string): void {
    ArrayUtils.add({name: text, done: false},this.todo);
    console.log("Update");
  }

  remove(item: ToDo): void {
    this.todo.splice(this.todo.findIndex(currentItem => currentItem === item),1)
  }

  flip(item: ToDo): void {
    this.todo[this.todo.findIndex(currentItem => currentItem === item)] = {...item, done: !item.done};
  }
}