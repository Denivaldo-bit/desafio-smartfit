import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
imports: [CommonModule, RouterModule, HeaderComponent, FormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desafio-smartfit';
}
