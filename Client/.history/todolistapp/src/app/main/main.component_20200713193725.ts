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
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
