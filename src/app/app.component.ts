import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  headerChange = false;

    @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    // this.headerChange = true;
    console.log('window>>', this.headerChange);
     if (window.pageYOffset > 50) {
      this.headerChange = true;
     } else {
      this.headerChange = false;
      console.log('window>>', window.pageYOffset);
     }
  }
}
