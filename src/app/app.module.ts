import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardgamesModule } from './boardgames/boardgames.module';
import { EventsModule } from './events/events.module';
import { HomesModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    BoardgamesModule,
    FormsModule,
    EventsModule,
    HomesModule,
    AppRoutingModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
