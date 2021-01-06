import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLoginComponent } from './home-login.component';

const homesRoutes: Routes = [
    {
        path: 'home',
        children: [
            { path: 'login', component: HomeLoginComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(homesRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
