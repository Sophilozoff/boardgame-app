import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { HttpErrorHandler } from '../http-error-handler.service';
import { MessageService } from '../message.service';
import { EventsService } from './events.service';
import { AuthGuard } from '../auth-guard.service';
import { ListEventsComponent } from './list-events.component';
import { FormEventComponent } from './form-event.component';
import { DetailEventComponent } from './detail-event.component';
import { EditEventComponent } from './edit-event.component';


@NgModule({
  imports: [
    CommonModule,
    // import HttpClientModule after Common.
    HttpClientModule,
    EventsRoutingModule
  ],
  declarations: [
    ListEventsComponent,
    FormEventComponent,
    DetailEventComponent,
    EditEventComponent
  ],
  
  providers: [
    EventsService, 
    HttpErrorHandler,
    MessageService,
    AuthGuard
  ]})
export class EventsModule { }
