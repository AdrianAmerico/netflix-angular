import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() opened = false;

  @Output()
  menuToogle: EventEmitter<boolean> = new EventEmitter<boolean>();

  contructor() {}

  ngOnInit() {}

  public toggle(): void {
    this.opened = !this.opened;
    this.menuToogle.emit(this.opened);
  }
}
