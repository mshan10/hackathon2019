import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-netid',
  templateUrl: './netid.component.html',
  styleUrls: ['./netid.component.scss']
})
export class NetidComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigate(['/auth/register/setup']);
  }

}
