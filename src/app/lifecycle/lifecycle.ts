import { Component } from '@angular/core';
import { LifecycleChild } from './lifecycle-child';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [LifecycleChild],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle {
  isChildActive = true;
  parentText = 'Hello from Parent!';
  projectedText = 'Custom projected text';
  clickCount = 0;

  toggleChild(): void {
    this.isChildActive = !this.isChildActive;
  }

  updateText(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.parentText = inputElement.value;
  }

  updateProjectedText(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.projectedText = inputElement.value;
  }

  triggerChangeDetection(): void {
    this.clickCount++;
    // Simply incrementing clickCount will trigger a change detection check
  }
}
