import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Event } from '../_models/event';
import { EventsService } from './events.service';


//import jquery for modifying materialize
declare var $: any;
@Component({
    selector: 'edit-form-event',
    templateUrl: './edit-form-event.component.html',
    providers: [EventsService],
})
export class EditEventComponent implements OnInit {

    event: Event = null;

    constructor(
        private route: ActivatedRoute,
        private eventsService: EventsService) { }

    ngOnInit(): void {
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
        let id = +this.route.snapshot.params['id'];
        this.eventsService.getEvent(id)
            .subscribe(event => this.event = event);      
    }
}