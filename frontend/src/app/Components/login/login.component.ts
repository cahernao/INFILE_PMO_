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
      email: this.user,
      password: this.password,
    };

    this.backend.login(data).subscribe(
      (res:any) => {
        console.log("res "+res);
        sessionStorage.setItem('token', res.token);
        //sessionStorage.setItem('type', res.type);
        //sessionStorage.setItem('id', res.id);
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
