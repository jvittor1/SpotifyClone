import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent {

  @Input()
  description: string = '';

  @Input()
  active = false;


  @Output()
  onClick = new EventEmitter<void>();


  handleClick() {
    this.onClick.emit();
  }

}
