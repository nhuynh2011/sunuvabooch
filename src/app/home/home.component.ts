import { Component, OnInit, HostListener, Inject, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../../../node_modules/keen-slider/keen-slider.min.css',
    './home.component.css'
  ],
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
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  currentSlide: number = 0
  dotHelper: Array<Number> = []
  slider: KeenSliderInstance | any = null


  ngAfterViewInit() {
    let slidesPerView = 3;

    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
      loop: true,
      mode: "free-snap",
      slides: {
        perView: slidesPerView
      },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      }
    })
    this.dotHelper = [
      ...Array(this.slider.track.details.slides.length).keys(),
    ]
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
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
