import { Component, Input } from '@angular/core';
import { artistInitialize } from 'src/app/common/artistInitialize';
import { IArtist } from 'src/app/interfaces/IArtist';

@Component({
  selector: 'app-artists-card',
  templateUrl: './artists-card.component.html',
  styleUrls: ['./artists-card.component.scss']
})
export class ArtistsCardComponent {

  @Input() artist: IArtist = artistInitialize();


}
