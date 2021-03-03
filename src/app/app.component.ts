import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  headerChange = false;

  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event) {
      // console.log(event)
        this.headerChange = true;
    }
  
    @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
        this.headerChange = true;
    }
  
    @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
        this.headerChange = true;
    }
    @HostListener('document:scroll') onmouseover() {
      console.log('over')
    }
}
