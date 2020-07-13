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
  GetUserToEditDetails():void{
    this.tasktoedit = this.apiconnect.GetTaskbyId(this.edittask.taskidtoedit).subscribe();
  }
  ngOnInit(): void {
  }

}
