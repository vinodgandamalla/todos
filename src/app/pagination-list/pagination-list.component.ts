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
    this.first = this.first - 6;
    this.last = this.last - 6;
    this.temp = this.store.slice(this.first, this.last);
    this.todos = this.temp;
  }
  next() {
    console.log(this.store.toJS());
    this.temp = this.store.slice(this.first, this.last);
    this.todos = this.temp;
    this.first = this.first + 3;
    if (this.last > this.count) {
      this.last = this.count;
    }
    {
      this.last = this.last + 3;
    }
  }

  constructor(private todoService: TodoService) {
    if (this.todoService.getTodos().count() < 3) {
      this.first = 0;
      this.last = 3;
    }
    {
      this.first = 3;
      this.last = 6;
    }
  }
}
