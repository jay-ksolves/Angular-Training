import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Imageapi, Image } from '../imageapi';

@Component({
  selector: 'app-imageslider',
  imports: [],
  templateUrl: './imageslider.html',
  styleUrl: './imageslider.css',
})
export class Imageslider {
  private imageApi = inject(Imageapi);

  activeIndex = signal<number>(0);

  images = toSignal(this.imageApi.getImages(), { initialValue: [] as Image[] });

  currentImage = computed(() => {
    const list = this.images();
    const index = this.activeIndex();
    return list.length > 0 ? list[index] : null;
  });

  previousImage() {
    const length = this.images().length;
    if (length > 0) {
      this.activeIndex.update((index) => (index > 0 ? index - 1 : length - 1));
    }
  }

  nextImage() {
    const length = this.images().length;
    if (length > 0) {
      this.activeIndex.update((index) => (index + 1) % length);
    }
  }
}
