import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './toolbar/toolbar';
import { Intro } from './intro/intro';
import { Sobre } from './sobre/sobre';
import { Habilidades } from './habilidades/habilidades';
import { Projetos } from './projetos/projetos';
import { Experiencia } from './experiencia/experiencia';
import { Formacao } from './formacao/formacao';

@Component({
  imports: [RouterOutlet, Toolbar, Intro, Sobre, Habilidades, Projetos, Experiencia, Formacao],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pratesDev');
}
