import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home as HomeComponent } from './home/home';
import { Header as HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <app-header></app-header>
    <app-home></app-home>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('HAW');
}
