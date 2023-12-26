import { Component, Input } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { userInitialize } from 'src/app/common/userInitialize';
import { IUser } from 'src/app/interfaces/IUser';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.scss']
})
export class UserFooterComponent {

  exitIcon = faSignOutAlt
  user: IUser = userInitialize();

  
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.user = this.spotifyService.user;
  }


  logout() {
    this.spotifyService.logout();
  }






}
