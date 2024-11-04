import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio5.component.html',
  styleUrl: './ejercicio5.component.css'
})
export class Ejercicio5Component {
  public  dia?:string;
}
