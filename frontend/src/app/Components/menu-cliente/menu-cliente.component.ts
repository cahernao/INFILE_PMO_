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

  ventana: string = 'inicio';
  noticias: any[] = [];
  categorias:any[]=[];
  noticia:any=null;

  recomendaciones: any[] = [];

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
    this.getRecomendados();

    
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

  limitarTexto(texto: string, maximoCaracteres: number = 20): string {
    if (!texto) {
      return '';
    }
  
    return texto.length > maximoCaracteres ? texto.substring(0, maximoCaracteres) + '...' : texto;
  }

  verNoticia(not:any){
    this.noticia = not;
    this.cambioVentana('noticia');
  }

  getRecomendados(){
    this.backend.verRecomendados().subscribe(
      (res:any) => {
        if (res){
          console.log(res.noticias)
          this.recomendaciones = res.noticias;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

