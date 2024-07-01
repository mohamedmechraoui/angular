import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  today:Date;
  day_comp:Date
  
  
  constructor(){
    this.today=new Date()
    this.day_comp=new Date()
  }

}
