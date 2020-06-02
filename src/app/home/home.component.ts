import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCounter : number;
  taskName : string = "Angular Project";
  taskListArray : string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.itemCounter = this.taskListArray.length;
  }

  addTask() : void{
      this.taskListArray.push(this.taskName);
      this.taskName = '';
      this.itemCounter = this.taskListArray.length;
  }

  removeTask(removingIndex) : void{
    // this.taskListArray.pop();
    this.taskListArray.splice(removingIndex,1);
    this.itemCounter = this.taskListArray.length;
  }

}
