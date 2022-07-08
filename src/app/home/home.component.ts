import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fade',
      [
        state('void', style({ opacity : 0})),
        transition(':enter',[ animate(300)]),
        transition(':leave',[ animate(500)]),
      ]
    )]
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document : any) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    // if (window.pageYOffset > 0) {
    //   let element = document.getElementById('navbar');
    //   if (element) {
    //     element.classList.add('px-6');
    //   }
    // }
  }

}
