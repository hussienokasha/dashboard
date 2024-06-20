import { Component, ElementRef, Renderer2 } from '@angular/core';

interface Car {
  id: number;
  carName: string;
  plate: string;
  branch: string;
  status: string;
  speed: number;
  location: string;
  display: string;
}

const ELEMENT_DATA: Car[] = [
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Alex',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  {
    id: 1,
    carName: 'Verna',
    plate: '123 - ن ث ق',
    branch: 'H',
    status: 'Rented',
    speed: 120,
    location: 'Cairo',
    display: '',
  },
  // ... (other data entries)
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private btn: ElementRef
  ) {}

  ngAfterViewInit() {
    const p_paginator_rpp_options = this.el.nativeElement.querySelector(
      '.p-element p-inputwrapper'
    );
    this.renderer.addClass(p_paginator_rpp_options, 'ms-auto');


    const btn = this.btn.nativeElement.querySelector('.p-ripple');
    this.renderer.addClass(btn,'bg-success')
  }

  cars: Car[] = [];

  first = 0;
  rows = 5; // Set default rows per page

  ngOnInit() {
    this.cars = ELEMENT_DATA;
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.cars ? this.first >= this.cars.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.cars ? this.first === 0 : true;
  }
}
