import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

// @Directive({ selector: 'div[slider]' })
// class Slider {
//   numberOfClicks = 0;
//   @Output() salida = new EventEmitter<any>();
//   @HostListener('click', ['$event.target'])
//   onClick(element: HTMLDivElement): void {
//     console.log(element.getBoundingClientRect().left);
//   }
// }

@Component({
  selector: 'app-custom-slide-images',
  templateUrl: './custom-slide-images.component.html',
  styleUrls: ['./custom-slide-images.component.scss']
})
export class CustomSlideImagesComponent implements OnInit {

  @ViewChild('slide', {
    static: true
  }) slide: ElementRef = new ElementRef(HTMLDivElement);
  @ViewChild('slider', {
    static: true
  }) slider: ElementRef = new ElementRef(HTMLDivElement);
  @ViewChild('sliderHandle', {
    static: true
  }) sliderHandle: ElementRef = new ElementRef(HTMLDivElement);
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event'])
  onMoving(event: any): void {
    const xMin = this.slide.nativeElement.getBoundingClientRect().left;
    const distancia = (event.clientX - xMin) * 100 / this.slide.nativeElement.getBoundingClientRect().width;
    this.slider.nativeElement.style.left = distancia + '%';
    this.sliderHandle.nativeElement.style.left = distancia + '%';
  }
}
