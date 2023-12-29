import { Component } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ITrack } from 'src/app/interfaces/ITrack';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent {

  tracks: ITrack[] = [];
  constructor(private spotifyService: SpotifyService) { }

  playIcon = faPlay;

  ngOnInit(): void {
    this.getRecommendations();
    // this.getStuff();

  }

  async getRecommendations() {
    this.tracks = await this.spotifyService.getTopTracks() || [];
    console.log(this.tracks);
    
  }
    
  // async getStuff() {
  //   await this.spotifyService.getStuffs();
    
  // }

  async getCategories() {
    const categories = await this.spotifyService.getCategories();
    console.log(categories);
    
  }

}


