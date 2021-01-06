import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';
import { User } from './_models/user';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?

  // Une méthode de connexion
  login(username: string, password: string): Observable<boolean> {
    // Faites votre appel à un service d'authentification...
    let isLoggedIn = (username === 'pikachu' && password === 'pikachu');

    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = isLoggedIn)
    );
  }

  // Une méthode de déconnexion
  logout(): void {
    this.isLoggedIn = false;
  }



}

