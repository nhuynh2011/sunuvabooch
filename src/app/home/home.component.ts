import { Component, OnInit, Inject } from '@angular/core';
// import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document : any) { }

  ngOnInit() {
  }
}
