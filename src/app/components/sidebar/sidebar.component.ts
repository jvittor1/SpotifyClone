import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBook, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 

  activeMenu: string = '';

  playlists : IPlaylist[] = []

  home = faHome
  search = faSearch
  library = faBook

  constructor(
    private spotifyService : SpotifyService,
    private router : Router,
    private activeRoute: ActivatedRoute
    ) { }


  ngOnInit(): void {  
      this.getPlaylists();
      this.updateActiveMenu();

    }


  handleClick(menu: string) {
    this.activeMenu = menu;
    this.router.navigate([`/player/${menu.toLowerCase()}`]);
  }


  navigateToPlaylistTracks(id: string) {
    this.router.navigate([`/player/list/playlist/${id}`]);
  }

  async getPlaylists() {
    this.playlists = await this.spotifyService.getPlaylists();
    
  }

  
  updateActiveMenu() {
    const activeMenu = this.activeRoute.snapshot.firstChild?.url[0].path;
    this.activeMenu = activeMenu ? activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1) : '';

    
  }

  navigateToHome(){
    this.router.navigate(['/player/home'])
  }

}
