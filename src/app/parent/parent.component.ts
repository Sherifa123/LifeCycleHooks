import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  mynumber: number = 25;
  ismynumber: boolean = true;

  increment() {
    this.mynumber++;
  }
  decrement() {
    this.mynumber--;
  }
  Remove() {
    this.ismynumber = !this.ismynumber;
  }
}
