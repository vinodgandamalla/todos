import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.css']
})
export class PaginationListComponent {
  store = this.todoService.getTodos();
  todos = this.store.slice(0, 3);
  temp;
  first = 0;
  last = 3;
  count = this.todoService.getTodos().count();
  previous() {
    this.first = this.first - 3;
    this.last = this.last - 3;

    this.temp = this.store.slice(this.first, this.last);
    this.todos = this.temp;
  }
  next() {
    this.first = this.first + 3;
    this.last = this.last + 3;
    this.temp = this.store.slice(this.first, this.last);
    this.todos = this.temp;
  }

  constructor(private todoService: TodoService) {}
}
