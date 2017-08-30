import { Injectable } from '@angular/core';
import { List } from 'immutable';

@Injectable()
export class TodoService {
  todos: List<{ label: string; id: number; complete: boolean }> = List([
    {
      label: 'Eat pizza',
      id: 0,
      complete: true
    },
    {
      label: 'Do some coding',
      id: 1,
      complete: true
    },
    {
      label: 'Sleep',
      id: 2,
      complete: false
    },
    {
      label: 'Print tickets',
      id: 3,
      complete: true
    }
  ]);

  getTodos() {
    return this.todos;
  }

  addTodo({ label }) {
    this.todos = this.todos.push({
      label: label,
      id: this.todos.count() + 1,
      complete: false
    });
    // this.todos = [{ label, id: this.todos.length + 1 }, ...this.todos];
  }

  completeTodo({ todo }) {
    todo.complete = !todo.complete;
    this.todos = this.todos.setIn(
      [this.todos.findIndex(item => item.id === todo.id)],
      {
        id: todo.id,
        label: todo.label,
        complete: todo.complete
      }
    );

    // this.todos = this.todos.map(
    // item =>
    // item.id === todo.id
    // ? Object.assign({}, item, { complete: !item.complete })
    // : item
    // );
  }

  removeTodo({ todo }) {
    this.todos = this.todos.deleteIn([
      this.todos.findIndex(item => item === todo)
    ]);
    // this.todos = this.todos.filter(({ id }) => id !== todo.id);
  }

  getById(id) {
    return this.todos.find(todo => todo.id === id);
    // return this.todos.find(todo => todo.id === id);
  }

  saveTodo({ todo }) {
    this.todos = this.todos.setIn(
      [this.todos.findIndex(item => item.id === todo.id)],
      {
        id: todo.id,
        label: todo.label,
        complete: todo.complete
      }
    );
    //   this.todos = this.todos.map(
    //     item =>
    //       item.id === parseInt(todo.id, 0)
    //         ? Object.assign({}, item, { label: todo.label })
    //         : item
    //   );
    // }
  }
  searchTodo({ input }) {
    console.log(this.todos.find(todo => todo.label === input));
    return List([this.todos.find(todo => todo.label === input)]);
  }
}
