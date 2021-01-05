import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Boardgame } from './boardgame';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable()
export class BoardgamesService {
    private log(log: string) {
        console.info(log);
    }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // URL to web api
    // private gamesUrl = 'https://bgg-json.azurewebsites.net/collection/edwalter';  
    private gamesUrl = 'http://localhost:8000/api/boardgames'; 
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('BoardgamesService');
    }
    /** GET games from the server */
    getBoardgames(): Observable<Boardgame[]> {
        return this.http.get<Boardgame[]>(this.gamesUrl)
            .pipe(
                tap(_ => this.log(`fetched boardgames`)),
                catchError(this.handleError('getBoardgames', []))
            );
    }
    /* GET heroes whose name contains search term */
    searchBoardgame(term: string): Observable<Boardgame[]> {
        if (!term.trim()) {
            return of([])
        }

        return this.http.get<Boardgame[]>(`${this.gamesUrl}`).pipe(
            tap(_ => this.log(`found games matching"${term}"`)),
            catchError(this.handleError<Boardgame[]>('searchBoardgame', []))
        );
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getBoardgame(id: number): Observable<Boardgame> {

        const url = `${this.gamesUrl}/${id}`;

        return this.http.get<Boardgame>(url).pipe(
            tap(_ => this.log(`fetched boardgame is=${id}`)),
            catchError(this.handleError<Boardgame>(`getBoardgame id=${id}`))
        )
    }



    //////// Save methods //////////

    /** POST: add a new hero to the database */
    addBoardgame(boardgame: Boardgame): Observable<Boardgame> {
        return this.http.post<Boardgame>(this.gamesUrl, boardgame, httpOptions)
            .pipe(
                catchError(this.handleError('addBoardgame', boardgame))
            );
    }


    /** PUT: update the hero on the server. Returns the updated hero upon success. */
    updateBoardgame(boardgame: Boardgame) {

    }
}
