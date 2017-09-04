import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { List } from 'immutable';
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

  delete({ todo }) {
    this.todoService.removeTodo({ todo });
    this.store = this.todoService.getTodos();
    this.todos = this.store.slice(this.first, this.last);
    if (this.todos === List([]) && this.first > 0 && this.last > 3) {
      this.first = this.first - 3;
      this.last = this.last - 3;
      this.todos = this.store.slice(this.first, this.last);
      this.count = this.store.count();
    } else {
      this.todos = this.store.slice(this.first, this.last);
      this.count = this.store.count();
    }
  }
  search({ input }) {
    this.todos = this.todoService.searchTodo({ input });

    this.count = this.todos.count();
  }
  constructor(private todoService: TodoService) {}
}
