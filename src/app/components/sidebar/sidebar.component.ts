import { Component } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  activeMenu: string = 'Home';

  playlists : IPlaylist[] = []

  home = faHome
  search = faSearch
  artists = faGuitar
  playlistIcon = faMusic

  constructor(private spotifyService : SpotifyService) { }


  ngOnInit(): void {  
      this.getPlaylists();

    }


  handleClick(menu: string) {
    this.activeMenu = menu;
  }


  async getPlaylists() {
    this.playlists = await this.spotifyService.getPlaylists();
    console.log(this.playlists);
    
    
  }

}
