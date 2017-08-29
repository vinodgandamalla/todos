import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todos: any[] = [
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
  ];

  getTodos() {
    return [
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
    ];
  }

  addTodo({ label }) {
    this.todos = [{ label, id: this.todos.length + 1 }, ...this.todos];
  }

  completeTodo({ todo }) {
    // console.log(todo);
    this.todos = this.todos.map(
      item =>
        item.id === todo.id
          ? Object.assign({}, item, { complete: !item.complete })
          : item
    );
  }

  removeTodo({ todo }) {
    this.todos = this.todos.filter(({ id }) => id !== todo.id);
  }

  getById(id) {
    return this.todos.find(todo => todo.id === id);
  }

  saveTodo({ todo }) {
    this.todos = this.todos.map(
      item =>
        item.id === parseInt(todo.id, 0)
          ? Object.assign({}, item, { label: todo.label })
          : item
    );
  }
}
