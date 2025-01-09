import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {
  @Input() noticia:any;


  fecha(fecha:any){
    const fechaObjeto = new Date(fecha); 
  const anio = fechaObjeto.getFullYear();
  const mes = String(fechaObjeto.getMonth() + 1).padStart(2, '0'); // Meses son 0-indexed
  const dia = String(fechaObjeto.getDate()).padStart(2, '0');

  return `${anio}-${mes}-${dia}`;
  }
}
