import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Event } from '../_models/event';
import { EventsService } from './events.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
    selector: 'list-events',
    templateUrl: './detail-event.component.html',
})

export class DetailEventComponent implements OnInit {

    event: Event = null;

    constructor(private route: ActivatedRoute, private router: Router, private eventsService: EventsService) { }

    ngOnInit() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.eventsService.getEvent(id)
        .subscribe(event => this.event = event);

    }
    delete(pokemon: Event): void{
        this.eventsService.deleteEvent(this.event)
        .subscribe(_ =>this.goBack());
    }
    goBack(): void {
        this.router.navigate(['events/all']);
    }
    goEdit(event: Event): void {
        let link = ['/events/edit', event.id];
        this.router.navigate(link);
    }


}
