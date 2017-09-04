import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `<div> <input *ngIf="this.first> 0 && this.last > 3" type= "button" value= "prev" (click)="prev.emit() "/> <input *ngIf="this.last <  this.count" type= "button" value= "next" (click)="next.emit()" />
</div>`
  //<h1> {{this.first}},{{this.last}},{{this.count}}</h1>
  // templateUrl: './pagination.component.html',
  // styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() count;
  @Input() first;
  @Input() last;
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();
  constructor() {}
}
