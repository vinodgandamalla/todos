import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  addTodo({ label }) {
    this.todos = [{ label, id: this.todos.length + 1 }, ...this.todos];
  }

  completeTodo({ todo }) {
    // console.log(todo);
    this.todos = this.todos.map(
      item =>
        item.id === todo.id ? Object.assign({}, item, { complete: true }) : item
    );
  }

  removeTodo({ todo }) {
    this.todos = this.todos.filter(({ id }) => id !== todo.id);
  }
}
