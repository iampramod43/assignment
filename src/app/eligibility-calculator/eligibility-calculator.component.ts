import { Component, OnInit } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {
  value: any = 10000;
  expense: any= 1000;
  ten: any = 1;
  loan: any;
  tenures: any = ['3 Months', '6 Months', '9 Months'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
