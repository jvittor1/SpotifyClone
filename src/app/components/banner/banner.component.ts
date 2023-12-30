import { Component, Input } from '@angular/core';

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
  @Input() backgroundColor: string = '';



  constructor() { }

  ngOnInit(): void {
  }


  getGradientBackground(): string {
    return `linear-gradient(to bottom, ${this.backgroundColor}, #0a0a0a)`;
  }

}
