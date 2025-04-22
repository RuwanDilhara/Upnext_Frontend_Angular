import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  images: string[] = [];
  previewIndex: number | null = null;

  constructor() {
    const img1 = 'https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg?auto=compress&cs=tinysrgb&w=600';
    const img2 = 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600';

    for (let i = 0; i < 95; i++) {
      this.images.push(i % 2 === 0 ? img1 : img2);
    }
  }

  openPreview(index: number): void {
    this.previewIndex = index;
  }

  closePreview(): void {
    this.previewIndex = null;
  }

  nextImage(): void {
    if (this.previewIndex !== null && this.previewIndex < this.images.length - 1) {
      this.previewIndex++;
    }
  }

  previousImage(): void {
    if (this.previewIndex !== null && this.previewIndex > 0) {
      this.previewIndex--;
    }
  }
}
