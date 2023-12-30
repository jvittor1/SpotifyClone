import { Component } from '@angular/core';
import { generateRandomColor } from 'src/app/common/functionHelper';
import { ICategory } from 'src/app/interfaces/ICategories';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  
  categories: ICategory[] = [];
  categoryBackgroundColors: string[] = [];
  
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getCategories();
    
    
  }

  async getCategories() {
    this.categories = await this.spotifyService.getCategories();
    this.categoryBackgroundColors = this.categories.map(() => generateRandomColor());
  }



    
}
