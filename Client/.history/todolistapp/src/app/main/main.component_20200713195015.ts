import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiconnectionService } from '../apiconnection.service';
import { Task } from '../task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apiconnect:ApiconnectionService, private formbuild:FormBuilder) { }
  newTaskForm:any;
  tasks:Task[];
  ngOnInit(): void {
    this.GetAllTasksFromAPI();
    this.newTaskForm = this.formbuild.group({
      Title:['', Validators.required],
      Description: ['', Validators.required],
      Date: ['', Validators.required]
    })
  }
  GetAllTasksFromAPI():void{
    this.apiconnect.GetAllTasks().subscribe(data =>{
      this.tasks = data;
    })
  }
  DeleteTask(taskid:number):void{
    this.apiconnect.DeleteTaskByID(taskid).subscribe(data=>location.reload());
  }
  AddnewTask():void{
    const task: Task = {
      Title: this.newTaskForm.controls.Title.value,
      Description: this.newTaskForm.controls.Description.value,
      Date: this.newTaskForm.controls.Date.value,
    };
    this.apiconnect.PostNewTask(task).subscribe();
   }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
