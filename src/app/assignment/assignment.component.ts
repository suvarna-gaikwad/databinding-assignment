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

  isStringEmpty(){
    //if(this.username.length == 0){
    if(this.username === ''){
      return true;
    }
    else{
      return false;
    }
  }

}