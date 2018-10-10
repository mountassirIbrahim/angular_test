import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable()
export class TodoDataService {
  lastId: number=0;

  todos: Todo[]=[];

  constructor() { }

  addTodo(todo: Todo): TodoDataService{
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  getAllTodos():Todo[]{
    return this.todos;
  }
}
