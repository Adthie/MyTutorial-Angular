import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent],
  template: `
    <h1>Main App Component</h1>
    <app-hello></app-hello>
  `
})
export class AppComponent {}
