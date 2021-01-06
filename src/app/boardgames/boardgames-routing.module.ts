import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBoardgameComponent } from './list-boardgame.component';
import { DetailBoardgameComponent } from './detail-boardgame.component';
import { AuthGuard } from '../auth-guard.service';

const boardgamesRoutes: Routes = [
    {
        path: 'boardgames',
        canActivate: [AuthGuard],
        children: [
            { path: 'all', component: ListBoardgameComponent },
            { path: 'boardgame/:id', component: DetailBoardgameComponent },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(boardgamesRoutes)],
    exports: [RouterModule]
})
export class BoardgamesRoutingModule { }
