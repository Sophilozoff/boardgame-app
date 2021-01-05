import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Event } from './event';
import { EventsService } from './events.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
    selector: 'list-events',
    templateUrl: './list-events.component.html',
    providers: [EventsService],
    styleUrls: ['./list-events.component.css']
})

export class ListEventsComponent implements OnInit {

    events: Event[];
    editEvent: Event | undefined;

    constructor(private router: Router, private eventsService: EventsService) {
        this.events = [];
    }

    ngOnInit() {

        this.eventsService.getEvents()
        .subscribe(data  => {
            console.log(data['hydra:member']);
            this.events = data['hydra:member'];
        });

    }
    delete(event: Event): void {
        console.log(event.id);
        this.eventsService.deleteEvent(event).subscribe(_ =>this.goBack());
    }
    selectEvent(event: Event) {
        let link = ['/events', event.id];
        this.router.navigate(link);    
    }
    goBack(): void {
        this.router.navigate(['events/all']);
    }
}

