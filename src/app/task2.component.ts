import {Component, Input} from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './task2.component.html', 
  styleUrls: ['task2.component.scss'] 
})



export class Task2Component {
  obj;
  constructor(private router: Router , private activatedRoute:ActivatedRoute) {
   
  } 

  ngOnInit():void {
    this.obj = history.state; 
    this.obj.navigationId = '';
    console.log(this.obj)
    //this.obj = history.state; 
    
  }
}
