import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  faSearch = faSearch;
  searchTerms: string = '';



  constructor(private routes: Router) { }

  ngOnInit(): void {
  }


  navigateToSearchResults( ){
    this.routes.navigate([`player/search/results/${this.searchTerms}`]);
    
  }

}
