import { Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { TrackListComponent } from '../track-list/track-list.component';

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
            },

            {
                path: 'list/:type/:id',
                component: TrackListComponent
            }
        ]
    },
];