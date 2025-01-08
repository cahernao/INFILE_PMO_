import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrarComponent } from './Components/registrar/registrar.component';
import { MenuInicialComponent } from './Components/menu-inicial/menu-inicial.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MenuProveedorComponent } from './Components/menu-proveedor/menu-proveedor.component';
import { MenuClienteComponent } from './Components/menu-cliente/menu-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    MenuInicialComponent,
    MenuProveedorComponent,
    MenuClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [provideHttpClient()],

  bootstrap: [AppComponent],
})
export class AppModule {}
