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
        Accept:'application/json',
        Authorization: `Bearer ${token}` || '',
      },
    });
  }

  verRecomendados() {
    const token = sessionStorage.getItem('token') || '';
    return this.http.get(`${this.noticiasService}/recomendados`, {
      headers: {
        
        Authorization: `Bearer ${token}` || '',
      },
    });
  }

  

  

}
