import { Component, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent {
  input: string;
  @Output() onSearch = new EventEmitter();
  constructor(public todoService: TodoService) {}
  submit() {
    this.onSearch.emit({ input: this.input });
  }
}
