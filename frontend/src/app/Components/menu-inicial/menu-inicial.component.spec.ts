import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInicialComponent } from './menu-inicial.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MenuInicialComponent', () => {
  let component: MenuInicialComponent;
  let fixture: ComponentFixture<MenuInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuInicialComponent],
      imports: [HttpClientTestingModule, FormsModule, MatSidenavModule, BrowserAnimationsModule, MatListModule, MatToolbarModule, MatIconModule ]
    });
    fixture = TestBed.createComponent(MenuInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
