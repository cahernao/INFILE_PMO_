import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { BackendService } from 'src/app/Services/backend.service';
//import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent {

  ventana: string = 'nombre';
  noticias: any[] = [];
  categorias:any[]=[];

  constructor(private backend:BackendService, 
    private auth:AuthService,
    private router:Router
  ){}

  ngOnInit(): void {
    if (!this.isValidToken()) {
      this.router.navigate(['/login']);
    }

    this.getNoticias();
    this.getCategorias();

    
  }

  private isValidToken(): boolean {
    const token = sessionStorage.getItem('token');
    
    if (!token) {
      return false;
    }
    return true;

    /*try {
      const decodedToken: any = jwt_decode(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      const isExpired = expirationDate.getTime() <= new Date().getTime();

      return !isExpired;
    } catch {
      return false;
    }*/
  }

  logout() {
    this.auth.logout();
  }

  cambioVentana(nombre:string){
    this.ventana = nombre;
  }

  getNoticias(){
    this.backend.verNoticias().subscribe(
      (res:any) => {
        if (res){
          console.log(res.noticias)
          this.noticias = res.noticias;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCategorias(){
    this.backend.verCat().subscribe(
      (res:any) => {
        if (res){
          console.log(res.categorias)
          this.categorias = res.categorias;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

