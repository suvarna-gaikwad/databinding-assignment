import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {
  }

  resetUser(){
    this.username = '';
  }

}