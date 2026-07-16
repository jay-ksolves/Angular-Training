import { Component, signal, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { TimerPipePipe } from '../pipe/timer-pipe-pipe';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [Card, CommonModule, TimerPipePipe],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.css'
})
export class StopwatchComponent implements OnDestroy {

  timer = signal<number>(0);
  isRunning = signal<boolean>(false);

  private intervalId: any = null;

  startTimer() {
    if (this.isRunning()) return;

    this.isRunning.set(true);

    this.intervalId = setInterval(() => {
      this.timer.update(value => value + 1);
    }, 1000);
  }

  pauseTimer() {
    this.isRunning.set(false);
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  stopTimer() {
    this.pauseTimer();        
    this.timer.set(0);           
  }

  // Cleanup when component is destroyed
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}