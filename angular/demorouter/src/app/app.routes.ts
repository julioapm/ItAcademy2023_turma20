import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'user',
        component: UserComponent,
        title: 'User Page',
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PagenotfoundComponent,
        title: '404'
    }
];
