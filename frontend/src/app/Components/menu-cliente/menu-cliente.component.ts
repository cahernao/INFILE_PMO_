import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent {

  ventana: string = 'nombre';

  ngOnInit(): void {
    if (sessionStorage.getItem('type') == 'Cliente') {
      this.ventana = 'home';
    }
    this.ventana = 'inventarioprov';

    
  }

  cambioVentana(ventana: string) {
    this.ventana = ventana;
  }

  logout() {
    sessionStorage.clear();
    window.location.href = '/login';
  }

}
