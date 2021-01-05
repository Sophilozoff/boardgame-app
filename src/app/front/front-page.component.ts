import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'front-index',
  templateUrl: './front-page.component.html',
})

export class FrontPageComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }
    
  ngOnInit(): void {
    alert('yo');
  }
}
