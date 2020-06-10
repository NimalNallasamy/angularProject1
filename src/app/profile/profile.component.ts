import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute, private rout : Router) {
    this.route.queryParamMap.subscribe(params => console.log(params.get('id')));
  }

  ngOnInit(): void {
  }

  NaviHome() : void {
    this.rout.navigate(['']);
  }
}
