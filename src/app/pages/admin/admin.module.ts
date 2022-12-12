import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewCategoriesComponent } from './pages/new-categories/new-categories.component';
import { AdminComponent } from './admin.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { NewProductosComponent } from './pages/new-productos/new-productos.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import {MatListModule} from '@angular/material/list';
import { EditarEstadoComponent } from './components/editar-estado/editar-estado.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import { GeneralDatosProdComponent } from './components/general-datos-prod/general-datos-prod.component';
import { InventarioDatosProdComponent } from './components/inventario-datos-prod/inventario-datos-prod.component';
import { EnvioDatosProdComponent } from './components/envio-datos-prod/envio-datos-prod.component';
import { PordRelacionadosDatosProdComponent } from './components/pord-relacionados-datos-prod/pord-relacionados-datos-prod.component';
import { AtributosDatosProdComponent } from './components/atributos-datos-prod/atributos-datos-prod.component';
import { AvanzadoDatosProdComponent } from './components/avanzado-datos-prod/avanzado-datos-prod.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    NewCategoriesComponent,
    AdminComponent,
    NewProductosComponent,
    CrearProductoComponent,
    EditarEstadoComponent,
    GeneralDatosProdComponent,
    InventarioDatosProdComponent,
    EnvioDatosProdComponent,
    PordRelacionadosDatosProdComponent,
    AtributosDatosProdComponent,
    AvanzadoDatosProdComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ]
})
export class AdminModule { }
