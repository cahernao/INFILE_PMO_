import { Component } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = '';
  password = '';
  tipoUsuario = 'Cliente';

  constructor(private backend: BackendService) {}

  login() {
    const data = {
      data: { user: this.user, password: this.password },
      tipoU: this.tipoUsuario,
    };

    this.backend.login(data).subscribe((res: any) => {
      console.log(res);
      if (res.result) {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('user', this.user);
        sessionStorage.setItem('type', this.tipoUsuario);
        alert('Login Correcto');
        window.location.href = '/home';
      } else {
        alert('Error de login');
      }
    });
  }
}
