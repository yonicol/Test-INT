import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiconnectionService } from '../apiconnection.service';
import { EditService } from '../edit.service';
import { Task } from '../task';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  constructor(private router:Router, private apiconnect:ApiconnectionService, private edittask:EditService) { }
  tasktoedit:Task;
  GetTaskToEditDetails():void{
    this.apiconnect.GetTaskbyId(this.edittask.taskidtoedit).subscribe(data => this.tasktoedit = data);
  }
  SendTaskToUpdate(id:number, title:string, description:string, date:string){
    if(title!=""){
      this.tasktoedit.tasktitle = title;
    }
    if(description!=""){
      this.tasktoedit.taskdescription = description;
    }
    if(date!=""){
      this.tasktoedit.taskdate = date;
    }
    this.apiconnect.UpdateTask(this.tasktoedit, this.tasktoedit.id).subscribe(data =>     this.router.navigate(['']));
  }
  ngOnInit(): void {
    this.GetTaskToEditDetails();
  }

}
