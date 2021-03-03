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
  loan;
  emi;
  tenures: any = [3, 6, 9];
  tenureValue;
  constructor() { }

  ngOnInit(): void {
    this.ten = this.tenures[0] + "Months";
    this.tenureValue = this.tenures[0];
    this.loan = Math.round(this.value - this.expense);

  }
  handleSelect(value, event) {
    if (event.source._selected) {
      this.tenureValue = value;
      this.ten = value + "Months";
      this.loan = Math.round(this.value - this.expense);
      this.emi = Math.round((this.value - this.expense) / this.tenureValue);
      console.log("ten>>>", this.loan, this.emi);
    }
  }
}
