import { Component, HostListener, OnInit } from '@angular/core';
import { GlobalConstants } from '../constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerChange = GlobalConstants.headerChange;

  
  constructor() { }

  ngOnInit(): void {
    // window.addEventListener('scroll', () => {
    //   if (window.screenY > 100) {
    //     handleShow(true);
    //   } else handleShow(false);
    // })
  }

  // @HostListener("document:scroll")
  // scrollFunction() {
  //   console.log('hello')
  //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
  //     this.headerChange = true;
  //   } else {
  //     this.headerChange = false;
  //   }
  // }
  // @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
  //   console.log(event)
  //   this.headerChange = true;
  // }

  // @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
  //     this.headerChange = true;
  // }

  // @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
  //     this.headerChange = true;
  // }

  @HostListener('click') doSomething() {
    alert('it work');
  }

}
