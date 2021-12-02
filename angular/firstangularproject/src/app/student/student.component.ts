import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() items = new EventEmitter;

  addNewItem(value: string) {
    this.items.emit(value);
  }
}
