import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardgamesRoutingModule } from './boardgames-routing.module';
import { HttpErrorHandler } from '../http-error-handler.service';
import { MessageService } from '../message.service';
import { BoardgamesService } from './boardgames.service';

import { ListBoardgameComponent } from './list-boardgame.component';
import { DetailBoardgameComponent } from './detail-boardgame.component';
import { SearchBoardgameComponent } from './search-boardgame.component';

@NgModule({
  imports: [
    CommonModule,
    // import HttpClientModule after Common.
    HttpClientModule,
    BoardgamesRoutingModule
  ],
  declarations: [
    ListBoardgameComponent,
    DetailBoardgameComponent,
    SearchBoardgameComponent
  ],
  
  providers: [
    BoardgamesService, 
    HttpErrorHandler,
    MessageService,
  ]})
export class BoardgamesModule { }
