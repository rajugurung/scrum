import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StandupComponent } from './standup/standup.component';

export const routes: Routes = [
    {
        path: '',
        title: 'My Dashboard',
        component: DashboardComponent
    },
    {
        path: 'standup',
        title: 'Standup',
        component: StandupComponent
    }
];
