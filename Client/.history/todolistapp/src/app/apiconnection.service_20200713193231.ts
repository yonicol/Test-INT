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
}
