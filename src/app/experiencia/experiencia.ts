
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-experiencia',
  styleUrl: './experiencia.scss',
  templateUrl: './experiencia.html',
})
export class Experiencia {

  experienciaAberta: number | null = null;

  toggleExperiencia(index: number): void {

    this.experienciaAberta = this.experienciaAberta === index ? null : index;

  }

}
