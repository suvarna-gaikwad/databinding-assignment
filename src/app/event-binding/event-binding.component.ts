import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  itemStatus = 'No items added';
  itemName = '';

  constructor() { }

  ngOnInit() {
  }

  onItemClick(){
    this.itemStatus = "Item Added Successfully!"
  }

  onItemUpdate(event : Event){
    this.itemName = (<HTMLInputElement>event.target).value;
  }

}
