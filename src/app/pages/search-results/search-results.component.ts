import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { searchResultsInitialize } from 'src/app/common/searchResultsInitialize';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { ISearchResults } from 'src/app/interfaces/ISearchResults';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  sub: Subscription[] = []
  searchResults: ISearchResults = searchResultsInitialize();
  searchResultsByCategory: IPlaylist[] = [];
  type: string = '';
  
  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService, private router: Router) { }

  ngOnInit(): void {
    this.getTerms();
    
  }

  ngOnDestroy(): void {
    this.sub.forEach(s => s.unsubscribe());
  }


  async getTerms() {
    const sub = this.activatedRoute.paramMap.subscribe(async params => {
      const type = params.get('type');
      const searchTerms = params.get('searchTerms');

      
      
      if (type && searchTerms) {
        await this.getSearchResults(type, searchTerms);
      }
    });

  }

  
  async getSearchResults(type: string, searchTerms: string) {

    if (type == 'results'){
      const res = await this.spotifyService.search(searchTerms);
      this.searchResults = res;    
      this.type = 'results';  
    }

    else if (type == 'category'){

      const res = await this.spotifyService.searchByCategory(searchTerms);
      this.searchResultsByCategory = res;    
      this.type = 'category';
    }

    else {
      this.router.navigate(['/player/home']);
    }

  }
  
}
