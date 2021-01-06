import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../_models/event';
import { EventsService } from './events.service';
import {NgForm} from '@angular/forms';

//import jquery for modifying materialize
declare var $: any;
@Component({
    selector: 'form-event',
    templateUrl: './form-event.component.html',
    providers: [EventsService],
})

export class FormEventComponent implements OnInit {
    events: Event[];
    constructor(private router: Router, private eventsService: EventsService) {
        this.events = [];
    }

    ngOnInit() {
        //function for datepicker and timepicker in materialize
        $(document).ready(function () {
            var currYear = (new Date()).getFullYear();
            //format, language
            $('.dategamepicker').datepicker({
                yearRange: [currYear, currYear + 1],
                format: "dd mmmm yyyy",
                i18n: {
                    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                    monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
                    weekdays: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                    weekdaysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                    weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"]
                }
            });
            //format 24 hours
            $('.timepicker').timepicker({
                twelveHour: false,
            }
            //function for activate select input in materialize
            );
            $('select').formSelect();

        });
    }

    add(title: string, 
        place: string,
        date: string, 
        hour: string,
        description: string, 
        nbMaxOfPlayers: string) 
        {
        title = title.trim();
        if (!title) { return; }
        this.eventsService.addEvent({ title, place, date, hour, description, nbMaxOfPlayers} as Event)
            .subscribe(event => {
                this.events.push(event);
            });
    }
}
