import { Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { SearchComponent } from 'src/app/components/search/search.component';

export const playerRoutes: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },

            {
                path: 'search',
                component: SearchComponent
            }
        ]
    },
];