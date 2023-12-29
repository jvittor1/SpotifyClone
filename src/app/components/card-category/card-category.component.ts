import { Component, Input } from '@angular/core';
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
  
  constructor() { }
  
   ngOnInit(): void {

  }
}
