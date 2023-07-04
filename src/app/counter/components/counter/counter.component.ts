import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  template: `
  <h3>Counter:{{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">RESET</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponet{
  constructor(){}

  public counter: number = 10;

  increaseBy( value: number ):void{
    this.counter += value;
  }
  resetCounter(){
    this.counter = 10
  }
}

