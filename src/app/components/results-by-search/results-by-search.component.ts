import { Component, Input } from '@angular/core';
import { searchResultsInitialize } from 'src/app/common/searchResultsInitialize';
import { ISearchResults } from 'src/app/interfaces/ISearchResults';

@Component({
  selector: 'app-results-by-search',
  templateUrl: './results-by-search.component.html',
  styleUrls: ['./results-by-search.component.scss']
})
export class ResultsBySearchComponent {

  @Input() searchResults: ISearchResults = searchResultsInitialize();

}
