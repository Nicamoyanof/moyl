import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-general-datos-prod',
  templateUrl: './general-datos-prod.component.html',
  styleUrls: ['./general-datos-prod.component.scss']
})
export class GeneralDatosProdComponent {
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}
