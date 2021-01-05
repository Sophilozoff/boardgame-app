import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth.service';
import { FrontPageComponent } from './front-page.component';
import { LoginComponent } from './login.component';


const frontRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: FrontPageComponent },
            { path: 'login', component: LoginComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(frontRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    AuthService
]
})
export class FrontRoutingModule { }