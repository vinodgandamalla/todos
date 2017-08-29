import { Component, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent {
  label: string;
  constructor(private todoService: TodoService) {}
  submit() {
    if (!this.label) {
      return;
    }
    {
      this.todoService.addTodo({ label: this.label });
      this.label = '';
    }
  }
}
