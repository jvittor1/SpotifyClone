import { Component, Input } from '@angular/core';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';

@Component({
  selector: 'app-results-by-category',
  templateUrl: './results-by-category.component.html',
  styleUrls: ['./results-by-category.component.scss']
})
export class ResultsByCategoryComponent {

  @Input() searchResultsByCategory: IPlaylist[] = [];
}
