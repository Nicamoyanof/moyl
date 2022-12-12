import { Component ,ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  panelOpenState = false;

  showMenu: boolean = false;
  openMenu() {
    if (this.showMenu) this.showMenu = false;
    else this.showMenu = true;
  }
}
