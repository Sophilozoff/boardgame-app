import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private router: Router
    ) { }
    canActivate(){
        console.log('Le guard a bien été appelé');
        return true;
    }
}
