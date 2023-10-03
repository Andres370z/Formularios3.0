import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewRegisterComponent } from './new-register/new-register.component';

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'login/:token',
            component: LoginComponent
        }]
    }
];
