import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstangularproject';
  pageHeader:string = 'Employee Details';
  currentItem:string = "INPUT Decorators";
  items1:any = ['item1', 'item2', 'item3', 'item4'];
  
  addItem(newItem: string) {
    this.items1.push(newItem);
    console.log(this.items1);
  }
  
}
