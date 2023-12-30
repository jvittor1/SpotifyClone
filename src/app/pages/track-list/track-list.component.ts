import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { generateRandomColor, stripHtmlTags } from 'src/app/common/functionHelper';
import { ITrack } from 'src/app/interfaces/ITrack';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent {

  title: string = '';
  imgUrl: string = '';
  description: string = '';
  isArtist: boolean = false;
  backgroundColor: string = '';

  sub: Subscription[] = []
  tracks: ITrack[] = [];

  
  constructor(
    private activeRoute: ActivatedRoute, 
    private route: Router, 
    private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getTracks();
  
  }

  ngOnDestroy(): void {
    this.sub.forEach(s => s.unsubscribe());
  }

  async getTracks() {
    const sub = this.activeRoute.paramMap.subscribe(async params => {
      const type = params.get('type');
      const id = params.get('id');
      
      if (type && id) {
        await this.getPageData(type, id);
      }
    });

    this.sub.push(sub)

  }

  async getPageData(type: string, id: string) {
    this.backgroundColor = generateRandomColor();
    if (type === 'playlist') {
      await this.getPlaylistTracks(id);
    }
    else if (type === 'artist') {
      await this.getArtistTracks(id);
      const artist = await this.spotifyService.getArtistById(id);
      
      console.log(artist);
      
    }
    else if (type === 'album') {
      await this.getAlbumTracks(id);
    }
    else {
      this.route.navigate(['/player/home']);
    }
  }


  async getPlaylistTracks(id: string) {
    this.tracks = await this.spotifyService.getTracksByPlaylistId(id);
    const { images, name, description } = await this.spotifyService.getPlaylistById(id) || {};
    this.imgUrl = images?.shift()?.url || '';
    this.title = name || '';
    this.description = stripHtmlTags(description || '');
    this.isArtist = false;
    
  }


  async getArtistTracks(id: string) {
    this.tracks = await this.spotifyService.getTracksByArtistId(id);
    const { images, name, followers} = await this.spotifyService.getArtistById(id) || {};
    this.imgUrl = images?.shift()?.url || '';
    this.title = name || '';
    this.description = followers?.total?.toString() + ' Followers' || '';
    this.isArtist = true;

  }


  async getAlbumTracks(id: string) {
    this.tracks = await this.spotifyService.getTrackByAlbumId(id);
    const { images, name, artists } = await this.spotifyService.getAlbumById(id) || {};
    this.imgUrl = images?.shift()?.url || '';
    this.title = name || '';
    this.description = artists?.shift()?.name || '';
    this.isArtist = false;
  }

    
  }


