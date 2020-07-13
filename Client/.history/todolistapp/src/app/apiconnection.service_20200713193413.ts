import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class ApiconnectionService {

  constructor(private apiconnect:HttpClient) { }

  GetAllTasks():Observable<Task[]>{
    return this.apiconnect.get<Task[]>(environment.apiconnectionlink);
  }
  PostNewTask(task:Task):Observable<Task>{
    return this.apiconnect.post<Task>(environment.apiconnectionlink, task);
  }
  DeleteTaskByID(taskid:number):Observable<Task>{
    return this.apiconnect.delete<Task>(`${environment.apiconnectionlink}/${taskid}`);
  }
  UpdateTask(taks:Task, taskid:number):Observable<Task>{
    return this.apiconnect.put<Task>(`${environment.apiconnectionlink}/${taskid}`, task);
  }
}
