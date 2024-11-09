import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})

export class PrincipalComponent implements OnInit {
  usuarios: any[] = [];
  usuariosFiltrados: any[] = [];
  filtroNome: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
      this.usuariosFiltrados = this.usuarios;
    });
  }

  filtrarUsuarios() {
    this.usuariosFiltrados = this.usuarios.filter(usuario =>
      usuario.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
    );
  }
}