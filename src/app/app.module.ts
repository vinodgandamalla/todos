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
import { SearchComponent } from './search/search.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { PaginationListComponent } from './pagination-list/pagination-list.component';
import { PaginationComponent } from './pagination/pagination.component';

export const ROUTES: Routes = [
  { path: '', component: PaginationListComponent },
  { path: 'todo/edit/:id', component: EditTodoComponent },
  { path: 'todo/add', component: TodoFormComponent },
  { path: 'todo/search-todos', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoComponent,
    EditTodoComponent,
    SearchComponent,
    SearchInputComponent,
    PaginationListComponent,
    PaginationComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
