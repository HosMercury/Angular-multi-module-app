import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink = "";
  data = [
    { name: 'James', age: 88, job: 'Designer', employeed: true },
    { name: 'Mono', age: 77, job: 'Developer', employeed: false },
    { name: 'Demo', age: 75, job: 'It technician', employeed: true }
  ];
  headers = [
    { key: 'employeed', label: 'Employeed' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
