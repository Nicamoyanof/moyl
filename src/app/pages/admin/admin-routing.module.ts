import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { HomeComponent } from './pages/home/home.component';
import { NewCategoriesComponent } from './pages/new-categories/new-categories.component';
import { NewProductosComponent } from './pages/new-productos/new-productos.component';

const routes: Routes = [
  {path:"", component:AdminComponent, children:[
    {path:"", component:HomeComponent},
    {path:"categorias", component:NewCategoriesComponent},
    {path:"productos", component:NewProductosComponent},
    {path:"productos/crear", component:CrearProductoComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
