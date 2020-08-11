import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() text="";

  list=[
    {name: "The First Task", done: true},
    {name: "Another Task", done: false}
  ];

  constructor() {
    this.list=[
      {name: "The First Task", done: true},
      {name: "Another Task", done: false}
    ];
  }

  ngOnInit(): void {

  }

  add(): void {
    this.list=[...this.list, {name: this.text, done: false}]
    this.text="";
  }

  remove(item): void {
    this.list=this.list.filter(currentItem => currentItem !== item)
  }

  flip(item): void {
    this.list=this.list.map(currentItem => currentItem === item ? {...item, done: !item.done} : currentItem);
  }
}
