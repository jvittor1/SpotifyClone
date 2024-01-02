import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { categoryInitialize } from 'src/app/common/categoryInitialize';
import { ICategory } from 'src/app/interfaces/ICategories';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss']
})
export class CardCategoryComponent {
  @Input() backgroundColor: string = '';
  @Input() category: ICategory = categoryInitialize();
  
  constructor(private router: Router) { }
  
   ngOnInit(): void {

  }

  navigateToCategory(id: string){
    this.router.navigate([`player/search/category/${id}`]);
  }

}
