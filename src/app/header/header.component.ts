import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  haveClickedHeader= false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  haveClickedHome() {
    this.router.navigate(['/']).then(() => {
      this.haveClickedHeader = false;
    });
  }

  haveClickedAbout() {
    this.router.navigate(['/']).then(() => {
      this.haveClickedHeader = false;
    });
  }

  haveClickedScience() {
    this.router.navigate(['/']).then(() => {
      this.haveClickedHeader = false;
    });
  }
}
