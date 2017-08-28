import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent {
  label: string;
  @Output() onAdd = new EventEmitter();

  submit() {
    if (!this.label) {
      return;
    }
    {
      this.onAdd.emit({ label: this.label });
      this.label = '';
    }
  }
}
