import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-todo',
  template: `<div><input type="text" [(ngModel)]="todoItem.label" />
  <input type= "button" value="save" (click)="this.todoService.saveTodo({todo: todoItem})" /></div>`
})
export class EditTodoComponent implements OnInit {
  todoId: number;
  todoItem: { label: string; id: number; complete: boolean };
  constructor(private route: ActivatedRoute, public todoService: TodoService) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => (this.todoId = parseInt(params.id, 0))
    );
    this.todoItem = this.todoService.getById(this.todoId);
    // console.log(this.todoItem);
  }
}
