import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  todos = this.todoService.getTodos();
  constructor(private todoService: TodoService) {}
  searchTodo({ input }) {
    this.todos = this.todoService.searchTodo({ input });
  }
}
