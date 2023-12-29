import { Component } from '@angular/core';
import { IArtist } from 'src/app/interfaces/IArtist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent {
  
  topArtists: IArtist[] = [];  
  relatedArtists: IArtist[] = [];

  constructor(private spotifyService: SpotifyService) { }



    ngOnInit(): void {
      this.getTopArtists();
      this.getRelatedArtists();
    }


    async getTopArtists() {
      this.topArtists = await this.spotifyService.getTopArtists();
    }
  
    async getRelatedArtists() {
      this.relatedArtists = await this.spotifyService.getRelatedArtists();
    
      
    }
}
