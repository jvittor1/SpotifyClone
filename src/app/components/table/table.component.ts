import { Component, Input } from '@angular/core';
import { faClock, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ITrack } from 'src/app/interfaces/ITrack';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() tracks: ITrack[] = [];

  clock = faClock;
  play = faPlay;
  hoveredRowIndex: number | null = null;

  constructor() { }

  getArtistsNames(artists: any[]) {
    return artists.map(artist => artist.name).join(', ');
  }
}
