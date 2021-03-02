import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.click();
  }

  click() {
    console.log('clicked');
  }

}
