import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  trackClick : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeStar() : void {
    this.trackClick = !this.trackClick;
  }

}
