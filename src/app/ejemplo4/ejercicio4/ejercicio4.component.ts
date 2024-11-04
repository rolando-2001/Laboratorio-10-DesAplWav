import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Persona } from '../interface/persona';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {

  public personas:Persona[]=[
    {nombre:'Rolando',edad:23},
    {nombre:'reyes',edad:50}
  ]

}
