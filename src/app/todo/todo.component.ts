import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  edit = false;
  @Input() item;
  @Output() onChange = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  @Output() onSae = new EventEmitter();
  onEdit() {
    this.edit = !this.edit;
  }
}
