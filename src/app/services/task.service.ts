import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080/task";

  getTaskList(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL}/`);
  }

  createTask(task: Task): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/`, task);
  }

  getTaskById(id: number): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseURL}/${id}`);
  }

  updateTask(id: number, task: Task): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, task);
  }
 
  deleteTask(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
