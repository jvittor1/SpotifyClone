import { Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { HomeComponent } from 'src/app/components/home/home.component';

export const playerRoutes: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    },
];