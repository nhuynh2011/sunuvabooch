import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: [
    '../../../node_modules/keen-slider/keen-slider.min.css',
    './slider.component.css'
  ]
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ! indicates that this type may not match until runtime, so avoid error checks
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
}
