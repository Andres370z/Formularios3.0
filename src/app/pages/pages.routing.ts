import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { RegisterComponent } from './register/register.component';

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'register',
            component: RegisterComponent
        }]
    }
];
