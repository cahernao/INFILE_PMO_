import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrarComponent } from './Components/registrar/registrar.component';
import { MenuProveedorComponent } from './Components/menu-proveedor/menu-proveedor.component';
import { MenuClienteComponent } from './Components/menu-cliente/menu-cliente.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registrar',
    component:RegistrarComponent
  },
  {
    path: 'proveedor',
    component: MenuProveedorComponent,
  },
  {
    path: 'home',
    component: MenuClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
