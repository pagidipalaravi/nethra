import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { 
    console.log("constructor");
  }
  ngOnChanges(): void{
    console.log("changes")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
  @Input() item: any; 
  firstName:string = "Nethra";
  lastName:string = "Bellamkonda";
  gender:string = "F";
  isApplied = false;
  show = true;
  myFunction(){
    console.log("Event Binding Occur");
  }
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 3, name:'Flash'},
    {id:4, name:'Robin'}
  ];
}
