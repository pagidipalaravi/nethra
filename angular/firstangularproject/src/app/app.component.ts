import { Component } from '@angular/core';

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
}
