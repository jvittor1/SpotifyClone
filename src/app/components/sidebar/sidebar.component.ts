import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private spotifyService : SpotifyService,
    private router : Router) { }


  ngOnInit(): void {  
      this.getPlaylists();

    }


  handleClick(menu: string) {
    this.activeMenu = menu;
    this.router.navigate([`/player/${menu.toLowerCase()}`]);
  }


  async getPlaylists() {
    this.playlists = await this.spotifyService.getPlaylists();
    
  }

}
