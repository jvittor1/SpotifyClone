import { Component } from '@angular/core';
import { albumInitialize } from 'src/app/common/albumInitialize';
import { IAlbum } from 'src/app/interfaces/IAlbum';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent {

  newReleases: IAlbum [] = [];
  randomNewReleases: IAlbum = albumInitialize();

  constructor(private spotifyService: SpotifyService) { }


  async getNewReleases() { 
    this.newReleases = await this.spotifyService.getNewReleases()
    this.randomNewReleases = this.newReleases[Math.floor(Math.random() * this.newReleases.length)];
  }

  ngOnInit(): void {
    this.getNewReleases();
  }

}
