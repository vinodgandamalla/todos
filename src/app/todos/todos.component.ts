import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos = this.todoService.getTodos();
  constructor(private todoService: TodoService) {}
}
