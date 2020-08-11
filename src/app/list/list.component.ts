import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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

}
