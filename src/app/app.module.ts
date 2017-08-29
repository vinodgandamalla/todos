import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { Routes, RouterModule } from '@angular/router';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

export const ROUTES: Routes = [
  { path: '', component: TodosComponent },
  { path: 'todo/edit/:id', component: EditTodoComponent },
  { path: 'todo/add', component: TodoFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoComponent,
    EditTodoComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
