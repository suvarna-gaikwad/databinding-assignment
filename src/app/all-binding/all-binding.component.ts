import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-binding',
  templateUrl: './all-binding.component.html',
  styleUrls: ['./all-binding.component.css']
})
export class AllBindingComponent implements OnInit {

  addItemBtnDisabledStatus = true;
  itemName3 = 'Test item 3';
  itemStatus = "No item added"

  constructor() { 
    setTimeout(() => {
      this.addItemBtnDisabledStatus = false;
    },2000)
  }

  ngOnInit() {
  }

  onItemChange(event : Event){
    this.itemStatus = "Item added successfully! Item name is " + this.itemName3;    
  }

}
