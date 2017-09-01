import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `<div> <h1> {{this.first}},{{this.last}}</h1> <input *ngIf="first>3" type= "button" value= "prev" (click)="prev.emit() "/> <input *ngIf="last <  count+ 1" type= "button" value= "next" (click)="next.emit()" />
</div>`
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
