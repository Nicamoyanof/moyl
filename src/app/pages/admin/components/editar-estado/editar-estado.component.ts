import { Component, Input, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.scss']
})
export class EditarEstadoComponent implements OnInit{
  isEdit:boolean = false;
  @Input() titleEstado:string;
  @Input() defaultValue:string;
  @Input() listSelect;
  @Output() selectedValue: string;
  
  ngOnInit(): void {
  }
  
  cambiarEstado(){
    this.listSelect.forEach(element => {
      if(element.value == this.selectedValue){
        this.defaultValue = element.viewValue
      }
    });
    this.editEstado();
  }

  editEstado(){
    if(this.isEdit){
      this.isEdit = false;
    }else{
      this.isEdit = true;
    }
  }

}
