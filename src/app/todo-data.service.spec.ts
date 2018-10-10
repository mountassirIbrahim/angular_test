import { TestBed, inject} from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

import { Todo } from './todo';


describe('TodoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  providers: [TodoDataService]

  }));



  it('should add todo in list correctly', inject([TodoDataService],(service:TodoDataService) => {

    let todo = new Todo({title:'dada', complete:true});
    service.addTodo(todo);
    expect(service.getAllTodos()).toEqual([todo]);
  }));
});
