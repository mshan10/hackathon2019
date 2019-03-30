import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegister() {
    console.log("registered")
  }

}
