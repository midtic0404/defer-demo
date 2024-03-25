import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three/child-three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildOneComponent, ChildTwoComponent, ChildThreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'defer-demo';
  count = 0;
  example = 'timer';

  increment() {
    this.count++;
  }

  changeExample(value: string) {
    this.example = value;
}
}
