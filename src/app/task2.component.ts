import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './task2.component.html',
})



export class Task2Component {
  @Input() test; 
  constructor() {} 

  ngOnInit():void {

  }
}
