import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mcwell = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMcwell(event) {
    console.log('mcwell clicked')
    this.mcwell = true;
  }

}
