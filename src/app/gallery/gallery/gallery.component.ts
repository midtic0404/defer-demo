import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  // 4 latte pictures in the assets folder
  pictures = [
    {
      id: 1,
      url: 'assets/latte-1.jpeg'
    },
    {
      id: 2,
      url: 'assets/latte-2.jpeg'
    },
    {
      id: 3,
      url: 'assets/latte-3.jpeg'
    },
    {
      id: 4,
      url: 'assets/latte-4.jpeg'
    },
  ]
}
