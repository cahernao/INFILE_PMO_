import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-menu-proveedor',
  templateUrl: './menu-proveedor.component.html',
  styleUrls: ['./menu-proveedor.component.css'],
})
export class MenuProveedorComponent {
  monedas = [
    {
      Nombre: '$US',
      Valor: 1,
    },
  ];

  currentMoneda = {
    Nombre: '$US',
    Valor: 1,
  };

  cambiarMoneda(evento: any) {
    this.currentMoneda = this.monedas[evento.target.value];
    console.log(this.currentMoneda);
  }

  ventana: string = 'nombre';

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
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
