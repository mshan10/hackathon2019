import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mcwell = false;
  // panda = true;
  blank = true;
  date = false;
  cal1 = false;
  cal2 = false;

  month = true;
  week = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAnnounce() {

  }
  
  onMcwell() {
    this.date = true;
    this.blank = false;
  }
 
  onWeek() {
    this.week = true;
    this.month = false;
    this.cal1 = true;
    this.date = false;
  }
  onCheck() {
    this.cal2 = true;
    this.cal1 = false;
  }
}
