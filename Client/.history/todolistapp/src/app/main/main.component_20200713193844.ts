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
  newUserForm:any;
  ngOnInit(): void {
    this.newUserForm = this.formbuild.group({
      Title:['', Validators.required],
      Description: ['', Validators.required],
      Date: ['', Validators.required]
    })
  }
  AddnewTask():void{
    const task: Task = {
      Title: this.newUserForm.controls.Title.value,
      Description: this.newUserForm.controls.Description.value,
      Date: this.newUserForm.controls.Date.value,
    };
    this.apiconnect.PostNewUser(user).subscribe();
    this.router.navigate(['']);
   }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
