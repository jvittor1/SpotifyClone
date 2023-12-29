import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { playerRoutes } from './player.routes';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { SidebarButtonComponent } from 'src/app/components/sidebar-button/sidebar-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFooterComponent } from 'src/app/components/user-footer/user-footer.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NewReleasesComponent } from 'src/app/components/new-releases/new-releases.component';
import { RightSidebarComponent } from 'src/app/components/right-sidebar/right-sidebar.component';
import { TopTracksComponent } from 'src/app/components/top-tracks/top-tracks.component';
import { RecentlyPlayedComponent } from 'src/app/components/recently-played/recently-played.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ArtistsCardComponent } from 'src/app/components/artists-card/artists-card.component';




@NgModule({
  declarations: [
    PlayerComponent,
    SidebarComponent,
    SidebarButtonComponent,
    UserFooterComponent,
    HomeComponent,
    NewReleasesComponent,
    RightSidebarComponent,
    TopTracksComponent,
    RecentlyPlayedComponent,
    CardComponent,
    ArtistsCardComponent

    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(playerRoutes),
    FontAwesomeModule
  ]
})
export class PlayerModule { }
