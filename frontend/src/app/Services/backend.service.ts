import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/app-constant';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}
  private accessService: string = "http://localhost:8080/api/v1/auth"
  private noticiasService: string = "http://localhost:8080/api/v1/noticias"
  private categoriaService: string = "http://localhost:8080/api/v1/cat"
  /*private perfilSerice: string = "XXXX"
  private inventarioService: string = "XXXX"
  private carritoService: string = "XXXX"
  private comprasService: string = "XXXX"
  private cuponesService: string = "XXXX"
  private bancoService: string = "XXXX"
  private emailService: string = "XXXX"
  private devolucionService: string = "XXXX"*/

  login(data: any) {
    return this.http.post(`${this.accessService}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.accessService}/register`, data);
  }
  verNoticias() {
    const token = sessionStorage.getItem('token') || '';
    return this.http.get(`${this.noticiasService}/test`, {
      headers: {
        Authorization: `Bearer ${token}` || '',
      },
    });
  }

  verCat() {
    const token = sessionStorage.getItem('token') || '';
    return this.http.get(`${this.categoriaService}/all`, {
      headers: {
        Authorization: `Bearer ${token}` || '',
      },
    });
  }

  /*perfil(data: any) {
    return this.http.post(`${this.perfilSerice}/perfilService/perfil`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  ganacias(data: any) {
    return this.http.post(
      `${this.perfilSerice}/perfilService/ganancias`,
      data,
      {
        headers: {
          Authorization: sessionStorage.getItem('token') || '',
        },
      }
    );
  }

  updateFoto(data: any) {
    return this.http.put(
      `${this.perfilSerice}/perfilService/updateFoto`,
      data,
      {
        headers: {
          Authorization: sessionStorage.getItem('token') || '',
        },
      }
    );
  }

  registrarProducto(data: any) {
    return this.http.post(
      `${this.inventarioService}/producto/registrar`,
      data,
      {
        headers: {
          Authorization: sessionStorage.getItem('token') || '',
        },
      }
    );
  }

  buscarProducto(data: any) {
    return this.http.post(`${this.inventarioService}/producto/buscar`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  eliminarProducto(data: any) {
    return this.http.post(`${this.inventarioService}/producto/eliminar`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  actualizarProducto(data: any) {
    return this.http.post(
      `${this.inventarioService}/producto/actualizar`,
      data,
      {
        headers: {
          Authorization: sessionStorage.getItem('token') || '',
        },
      }
    );
  }

  getDivizas() {
    return this.http.get(`${this.bancoService}/bancosService`, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  getAllMonedas() {
    return this.http.get(`${this.comprasService}/bancosService/monedas`, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  insertDiviza(data: any) {
    return this.http.post(
      `${this.bancoService}/bancosService/newMoneda`,
      data,
      {
        headers: {
          Authorization: sessionStorage.getItem('token') || '',
        },
      }
    );
  }

  getAllProductos() {
    return this.http.get(`${this.comprasService}/gou/productos`);
  }

  verCarrito(data: any) {
    return this.http.post(`${this.carritoService}/carrito/ver`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  eliminarCarrito(data: any) {
    return this.http.post(`${this.carritoService}/carrito/eliminar`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  agregarCarrito(data: any) {
    return this.http.post(`${this.carritoService}/carrito/agregar`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  agregarBilletera(data: any) {
    return this.http.post(`${this.carritoService}/carrito/agregarbi`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  verBilletera(data: any) {
    return this.http.post(`${this.carritoService}/carrito/bi`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  setBilletera(data: any) {
    return this.http.post(`${this.carritoService}/carrito/setbi`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  getTarjetas(data: any) {
    return this.http.get(`${this.comprasService}/gou/tarjetas?user=${data}`);
  }

  agregarTarjeta(data: any) {
    return this.http.post(`${this.comprasService}/gou/addtarjeta`, data);
  }

  getCupones() {
    return this.http.get(`${this.cuponesService}/cupones/ver`);
  }

  setCupon(data: any) {
    return this.http.post(`${this.cuponesService}/cupones/set`, data);
  }

  upCupon(data: any) {
    return this.http.post(`${this.cuponesService}/cupones/up`, data);
  }

  confirmarCompra(data: any) {
    return this.http.post(`${this.comprasService}/gou/confirmarcompra`, data);
  }

  emailConfirmar(data: any) {
    return this.http.post(`${this.emailService}/email/bill`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  emailCart(data: any) {
    return this.http.post(`${this.emailService}/email/cart`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  emailStock(data: any) {
    return this.http.post(`${this.emailService}/email/stock`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  updateTarjeta(id: number, estado: number) {
    return this.http.get(
      `${this.comprasService}/gou/uptarjeta?tarjeta=${id}&estado=${estado}`
    );
  }

  verComprasCliente(data: any) {
    return this.http.post(`${this.devolucionService}/devolucion/ver2`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  verDevolucionesCliente(data: any) {
    return this.http.post(`${this.devolucionService}/devolucion/ver`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  pedirDevolucion(data: any) {
    return this.http.post(`${this.devolucionService}/devolucion/pedir`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  EliminarDevolucion(data: any) {
    return this.http.post(
      `${this.devolucionService}/devolucion/eliminar`,
      data,
      {
        headers: {
          Authorization: sessionStorage.getItem('token') || '',
        },
      }
    );
  }

  verDevolucionesAdmin(data: any) {
    return this.http.post(`${this.devolucionService}/devolucion/ver3`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  rechazarDevolucionesAdmin(data: any) {
    return this.http.post(
      `${this.devolucionService}/devolucion/rechazar`,
      data,
      {
        headers: {
          Authorization: sessionStorage.getItem('token') || '',
        },
      }
    );
  }

  aceptarDevolucionesAdmin(data: any) {
    return this.http.post(
      `${this.devolucionService}/devolucion/aceptar`,
      data,
      {
        headers: {
          Authorization: sessionStorage.getItem('token') || '',
        },
      }
    );
  }

  getExternos(ip:any) {
    return this.http.get(`${ip}`, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  agregarCarritoEx(data: any) {
    return this.http.post(`${this.carritoService}/carrito/agregarex`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  verCarritoEx(data: any) {
    return this.http.post(`${this.carritoService}/carrito/verEx`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  eliminarCarritoEx(data: any) {
    return this.http.post(`${this.carritoService}/carrito/eliminarEx`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }

  eliminarCarritoEx2(data: any) {
    return this.http.post(`${this.carritoService}/carrito/eliminarEx2`, data, {
      headers: {
        Authorization: sessionStorage.getItem('token') || '',
      },
    });
  }*/

}
