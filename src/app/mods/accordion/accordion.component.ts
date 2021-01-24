import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openedIndex = 0;

  constructor() { }

  onClick(i: number) {
    if (i === this.openedIndex)
    {
      this.openedIndex = -1;
    } else
    {
      this.openedIndex = i;

    }
  }

  ngOnInit(): void {
  }

}
