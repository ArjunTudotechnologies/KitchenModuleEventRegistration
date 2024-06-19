import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StepsComponent } from './steps/steps.component';
import { SuccespageComponent } from './succespage/succespage.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'create-event',
        component:StepsComponent
    },
    {
        path: 'success',
        component:SuccespageComponent
    }
];
