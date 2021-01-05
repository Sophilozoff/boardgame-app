import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Event } from './event';
import { MessageService } from '../message.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/ld+json',
    })
};

@Injectable()
export class EventsService {
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`EventsService: ${message}`);
    }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // URL to web api
    private eventsUrl = 'http://127.0.0.1:8000/api/events';
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

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler, private messageService: MessageService) {
        this.handleError = httpErrorHandler.createHandleError('EventsService');
    }

    /** GET events from the server */
    getEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(this.eventsUrl)
            .pipe(
                tap(_ => this.log(`fetched events`)),
                catchError(this.handleError('getEvents', []))
            );
    }

    /** GET one event from the server */
    getEvent(id: number): Observable<Event> {

        const url = `${this.eventsUrl}/${id}`;

        return this.http.get<Event>(url).pipe(
            tap(_ => this.log(`fetched event is=${id}`)),
            catchError(this.handleError<Event>(`getEvent id=${id}`))
        )
    }

    /** POST: add a new event to the database */
    addEvent(event: Event): Observable<Event> {
        return this.http.post<Event>(this.eventsUrl, event, httpOptions)
            .pipe(
                tap(_ => this.log(`added event`)),
                catchError(this.handleError('addEvent', event))
            );

    }
    /** PUT: update the event on the server */
    updateEvent(event: Event): Observable<any> {
        return this.http.put(this.eventsUrl, event, this.httpOptions).pipe(
            tap(_ => this.log(`updated event id=${event.id}`)),
            catchError(this.handleError<any>('updateEvent'))
        );
    }
    
    /** DELETE: delete the event from the server */
    deleteEvent(event: Event | number): Observable<Event> {
        const id = typeof event === 'number' ? event : event.id;
        const url = `${this.eventsUrl}/${id}`;

        return <any>this.http.delete<Event>(url, this.httpOptions)
            .pipe(
                tap(_ => this.log(`deleted event id=${id}`)),
                catchError(this.handleError<Event>('deleteEvent'))
            );
    }

}
