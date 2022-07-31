import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  increaseBy(amount: number) {
    this.counter += amount;
  }
  decreaseBy(amount: number) {
    this.counter -= amount;
  }

}
