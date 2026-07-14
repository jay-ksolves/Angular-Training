import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DummyApiService } from '../dummyapi';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dummyapicall',
  imports: [CommonModule],
  templateUrl: './dummyapicall.html',
  styleUrl: './dummyapicall.css',
})
export class Dummyapicall {
  private dummyapi = inject(DummyApiService);

  // Convert Observable to Signal (Modern way)
  data = toSignal(this.dummyapi.getData(), {
    initialValue: null as any,
  });
}
