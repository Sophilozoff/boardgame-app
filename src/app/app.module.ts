import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardgamesModule } from './boardgames/boardgames.module';
import { EventsModule } from './events/events.module';
import { PageNotFoundComponent } from './front/page-not-found.component';
import { FrontPageComponent } from './front/front-page.component';
import { NavbarComponent } from './front/navbar.component';
import { FooterComponent } from './front/footer.component';
import { LoginComponent } from './front/login.component';
import { FrontModule } from './front/front.module';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FrontPageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    BoardgamesModule,
    FormsModule,
    EventsModule,
    AppRoutingModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
