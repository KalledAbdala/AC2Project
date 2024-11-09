import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  senha: string = '';
  errorMessage: string | null = null;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit() {
    this.usuarioService.getUsuario(this.email, this.senha).subscribe((usuario) => {
      if (usuario.length) {
        this.router.navigate(['/principal']);
      } else {
        this.errorMessage = 'E-mail ou senha inválido!';
      }
    });
  }
}
