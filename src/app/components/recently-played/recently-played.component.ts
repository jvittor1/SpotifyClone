import { Component } from '@angular/core';
import { ITrack } from 'src/app/interfaces/ITrack';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent {

  constructor(private spotifyService: SpotifyService) { }
  recentlyPlayed: ITrack[] = [];

  ngOnInit(): void {
    this.getRecentlyPlayed();
  }


  async getRecentlyPlayed() {
    this.recentlyPlayed = await this.spotifyService.getRecentlyPlayed();
  }

}
