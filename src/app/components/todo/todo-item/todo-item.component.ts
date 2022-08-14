import { Component, Input } from '@angular/core';
import { TableColumn } from "../todo.component";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() column!: TableColumn;

  constructor() { }
}
