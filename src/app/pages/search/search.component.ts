import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {



  constructor(private spotifyService: SpotifyService, private routes: Router) { }

  ngOnInit(): void {

  }



}
