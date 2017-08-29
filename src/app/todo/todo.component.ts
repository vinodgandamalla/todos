import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
    `
    .complete { text-decoration: line-through; }
  `
  ]
})
export class TodoComponent {
  @Input() item;
  constructor(public todoService: TodoService) {}
}
