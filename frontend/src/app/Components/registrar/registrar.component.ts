import { Dir } from '@angular/cdk/bidi';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {

  mensajeValidacion: string = '';
  mensajeCorreo:string='';
  mensajeTelefono:string='';
  

  cliente = {
    username: '',
    email: '',
    password: '',
    phone: '',
  };

  tipoUsuario = 'Cliente';
  EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/;
  PHONE_REGEX = /^\+\d{1,4}\d{10}$/;


  constructor(private backend: BackendService) { }

  verificarPassword(): void {
    this.mensajeValidacion = this.validarPassword(this.cliente.password);
  }

  validarPassword(password: string): string {
    const longitud = /.{8,}/; // Mínimo 8 caracteres
    const mayuscula = /[A-Z]/; // Al menos una letra mayúscula
    const minuscula = /[a-z]/; // Al menos una letra minúscula
    const numero = /[0-9]/; // Al menos un número
    const caracterEspecial = /[_\.\*]/; // Al menos un carácter especial: _, ., *
  
    if (!longitud.test(password)) {
      return "La contraseña debe tener al menos 8 caracteres.";
    }
    if (!mayuscula.test(password)) {
      return "La contraseña debe contener al menos una letra mayúscula.";
    }
    if (!minuscula.test(password)) {
      return "La contraseña debe contener al menos una letra minúscula.";
    }
    if (!numero.test(password)) {
      return "La contraseña debe contener al menos un número.";
    }
    if (!caracterEspecial.test(password)) {
      return "La contraseña debe contener al menos un carácter especial (_ . *).";
    }
  
    return "";
  }

  validoCorreo(){
    if (!this.EMAIL_REGEX.test(this.cliente.email)) {
      this.mensajeCorreo = 'Correo electrónico no válido';
    } else {
      this.mensajeCorreo = '';
    }
  }

  validoTelefono(){
    if (!this.PHONE_REGEX.test(this.cliente.phone)) {
      this.mensajeTelefono = 'Telefono no válido';
    } else {
      this.mensajeTelefono = '';
    }
  }
  

  registrar() {
    /*let body = {
      data: {},
      tipoU: this.tipoUsuario,
    };*/

    if (
      this.cliente.username === '' ||
      this.cliente.email === '' ||
      this.cliente.password === '' ||
      this.cliente.phone === ''
    ) {
      alert('Todos los campos son requeridos');
      return;
    }
    let body = this.cliente;

    console.log("lo qu evoy a envair "+body)

    this.backend.register(body).subscribe((res: any) => {
      alert(res.message);
      if (res.message) {
        window.location.href = '/login';
      }
    });
  }

  deshabilitar():boolean{
    return this.mensajeValidacion !== '' || this.mensajeCorreo !== '' || this.mensajeTelefono !== '';
  }
}
