import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { playerRoutes } from './player.routes';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { SidebarButtonComponent } from 'src/app/components/sidebar-button/sidebar-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFooterComponent } from 'src/app/components/user-footer/user-footer.component';



@NgModule({
  declarations: [
    PlayerComponent,
    SidebarComponent,
    SidebarButtonComponent,
    UserFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(playerRoutes),
    FontAwesomeModule
  ]
})
export class PlayerModule { }
