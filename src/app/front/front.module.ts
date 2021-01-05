import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { HttpErrorHandler } from '../http-error-handler.service';
import { MessageService } from '../message.service';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BoardgamesModule } from '../boardgames/boardgames.module';
import { EventsModule } from '../events/events.module';


@NgModule({
  imports: [
    CommonModule,
    // import HttpClientModule after Common.
    HttpClientModule,
    FrontRoutingModule,
    BoardgamesModule,
    FormsModule,
    EventsModule,
  ],
  declarations: [
    LoginComponent,
    BoardgamesModule,
    FormsModule,
    EventsModule,
  ],
  
  providers: [
    HttpErrorHandler,
    MessageService,
  ]})
export class FrontModule { }
