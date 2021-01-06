import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorHandler } from '../http-error-handler.service';
import { MessageService } from '../message.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLoginComponent } from './home-login.component';


@NgModule({
  imports: [
    CommonModule,
    // import HttpClientModule after Common.
    HttpClientModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeLoginComponent
  ],
  
  providers: [
    HttpErrorHandler,
    MessageService,
  ]})
export class HomesModule { }
