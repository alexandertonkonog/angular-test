import { Component } from '@angular/core';

export type TableItem = {
  id: number;
  name: string;
  isComplete: boolean;
};

export type TableColumn = {
  name: keyof TableItem;
  isVisible: boolean;
};

const data: TableItem[] = [
  { id: 1, name: 'First', isComplete: false },
  { id: 2, name: 'First', isComplete: false },
  { id: 3, name: 'First', isComplete: false },
];

const columns: TableColumn[] = [
  { name: 'id', isVisible: true },
  { name: 'name', isVisible: true },
  { name: 'isComplete', isVisible: true },
];

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  data: TableItem[] = data;
  columns: TableColumn[] = columns;
  displayedColumns: (keyof TableItem)[] = columns.filter(col => col.isVisible).map(col => col.name);
  constructor() {
    console.log(this.data, this.columns, this.displayedColumns);
  }
}
