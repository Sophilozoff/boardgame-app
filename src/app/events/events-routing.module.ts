import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEventsComponent } from './list-events.component';
import { FormEventComponent } from './form-event.component';
import { DetailEventComponent } from './detail-event.component';
import { EditEventComponent } from './edit-event.component';
import { AuthGuard } from '../auth-guard.service';

const eventsRoutes: Routes = [
    {
        path: 'events', 
        canActivate: [AuthGuard],
        children: [
            { path: 'all', component: ListEventsComponent },
            { path: 'create', component: FormEventComponent },
            { path: 'edit/:id', component: EditEventComponent},
            { path: ':id', component: DetailEventComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(eventsRoutes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }
