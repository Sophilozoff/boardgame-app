import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './home-login.component.html',
})
export class HomeLoginComponent implements OnInit {

  constructor(private router: Router ) { }
  ngOnInit(): void {
    console.log('ok');
  }
}
