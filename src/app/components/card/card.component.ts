import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { albumInitialize } from 'src/app/common/albumInitialize';
import { trackerInitialize } from 'src/app/common/trackInitialize';
import { IAlbum } from 'src/app/interfaces/IAlbum';
import { IArtist } from 'src/app/interfaces/IArtist';
import { ITrack } from 'src/app/interfaces/ITrack';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private route: Router) { }
  
  @Input() artists: IArtist[] = [];
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() artistId: string = '';
  @Input() artistName: string = '';

  playIcon = faPlay;

  navigateToTrack(type: string, id: string) {
    this.route.navigate([`/player/list/${type}/${id}`]);
  }

}
