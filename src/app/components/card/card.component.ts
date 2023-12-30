import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { trackerInitialize } from 'src/app/common/trackInitialize';
import { ITrack } from 'src/app/interfaces/ITrack';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private route: Router) { }

  @Input() track: ITrack = trackerInitialize();

  playIcon = faPlay;

  navigateToTrack(id: string) {
    this.route.navigate([`/player/list/album/${id}`]);
  }
}
