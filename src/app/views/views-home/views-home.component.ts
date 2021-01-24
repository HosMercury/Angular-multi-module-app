import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '#No of users' },
    { value: 65, label: 'Revenue' },
    { value: 54, label: 'Benefits' },
  ];
  items = [
    { image: 'assets/images/couch.jpeg', title: 'Couch', description: 'This is fantastic' },
    { image: 'assets/images/dresser.jpeg', title: 'Dresser', description: 'This is fantastic' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
