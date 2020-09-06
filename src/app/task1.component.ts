import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router} from '@angular/router' 

@Component({ 
   selector: 'app-parent', 
  templateUrl: './task1.component.html',
  styleUrls:['./task1.component.scss'] 
})
export class Task1Component implements OnInit {

  content: string; 
  inputVal: string[] = []; 
  passedList:string[] = []; 
  obj:any = {}; 
  constructor(private router: Router) {

  }
  
  

  ngOnInit(): void {
    this.content =
      `<div #placeholder_first_name></div>

      <div #placeholder_last_name></div>
      `;
  }

  parseTemplate() {
    // removing all whitespaces from string using regex
    const removeWhite = this.content.replace(/\s+/g, '');  
   // splitting string from # and > elements
    const splitString = this.content.split(/[#\>]/); 
    // filtering over resulted array to remove uneseccary chunks  
    const filteredArray = splitString.filter((part)=>{
      return part.startsWith('placeholder_'); 
    
    }) 
    // final array with fields for inputs we want to create
    const finalList = filteredArray.map((part)=> {
      return part.substring(12); 
    }) 
    this.passedList = finalList; 

  }

  displayResult(passed) {
       this.obj = passed; 
      
  }

  getDynamic() {
    this.router.navigateByUrl('/task2', {state:this.obj})
  }

  
}
