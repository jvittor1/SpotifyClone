import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  faSearch = faSearch;
  
  constructor() { }

  ngOnInit(): void {

  }


}
