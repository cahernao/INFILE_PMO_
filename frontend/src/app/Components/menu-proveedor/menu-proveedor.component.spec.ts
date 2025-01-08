import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProveedorComponent } from './menu-proveedor.component';
import { InventarioProvComponent } from '../inventario-prov/inventario-prov.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MenuProveedorComponent', () => {
  let component: MenuProveedorComponent;
  let fixture: ComponentFixture<MenuProveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuProveedorComponent, InventarioProvComponent],
      imports: [HttpClientTestingModule, FormsModule, MatSidenavModule, BrowserAnimationsModule, MatListModule, MatToolbarModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(MenuProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
