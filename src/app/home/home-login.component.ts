import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'login',
  templateUrl: './home-login.component.html',
})
export class HomeLoginComponent {

  constructor(private router: Router) {
  }


}