import { Component, Input } from '@angular/core';
import { generateRandomColor } from 'src/app/common/functionHelper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() isArtist: boolean = false;




  constructor() { }

  ngOnInit(): void {

  }

}
