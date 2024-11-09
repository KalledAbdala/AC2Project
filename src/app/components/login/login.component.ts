import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  senha: string = '';
  errorMessage: string | null = null;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit() {
    this.usuarioService.getUsuario(this.email, this.senha).subscribe((usuario: any) => {
      if (usuario.length) {
        this.router.navigate(['/principal']);
      } else {
        this.errorMessage = 'E-mail ou senha inválido!';
      }
    });
  }
}
