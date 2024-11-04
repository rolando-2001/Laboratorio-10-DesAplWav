import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  public cargos=['Programador','Anilista','Administrador  de BD','Diseñador']

}
