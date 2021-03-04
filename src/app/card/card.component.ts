import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() title: String;
  @Input() desc: String;

  constructor() { }

  ngOnInit(): void {
  }

}
