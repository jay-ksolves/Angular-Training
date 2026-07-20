import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import things we need from RxJS
import { of, from, interval } from 'rxjs';
import { map, filter, debounceTime, switchMap, mergeMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class RxjsComponent {

  // These variables store the result so we can show it on the HTML page
  mapResult = '';
  filterResult = '';
  debounceResult = '';
  switchResult = '';
  mergeResult = '';
  takeResult = '';

  // ==================== 1. MAP ====================
  runMap() {
    // of(3) = create an observable that emits the number 3
    of(3).pipe(
      // map = transform each value (here we multiply by 10)
      map(number => number * 10)
    ).subscribe(result => {
      // When we get the result, save it so Angular can display it
      this.mapResult = 'Result: ' + result;
    });
  }

  // ==================== 2. FILTER ====================
  runFilter() {
    this.filterResult = ''; // clear previous result

    // from([1,2,3...]) = create observable from an array
    from([1, 2, 3, 4, 5, 6]).pipe(
      // filter = only allow numbers that return true
      filter(n => n % 2 === 0)   // keep only even numbers
    ).subscribe(n => {
      // add each passed number to the result
      this.filterResult += n + ' ';
    });
  }

  // ==================== 3. DEBOUNCETIME ====================
  onType(event: any) {
    const text = event.target.value; // get what user typed

    of(text).pipe(
      // debounceTime = wait 800 milliseconds before emitting
      // This prevents sending request on every keystroke
      debounceTime(800)
    ).subscribe(value => {
      this.debounceResult = 'You typed: ' + value;
    });
  }

  // ==================== 4. SWITCHMAP ====================
  runSwitchMap() {
    this.switchResult = 'Loading...';

    of(1).pipe(
      // switchMap = cancel previous inner observable and start new one
      // Very useful for search (only latest search matters)
      switchMap(() => of('Data Loaded Successfully'))
    ).subscribe(result => {
      this.switchResult = result;
    });
  }

  // ==================== 5. MERGEMAP ====================
  runMergeMap() {
    this.mergeResult = '';

    from([1, 2, 3]).pipe(
      // mergeMap = map each value to a new observable and merge all results
      // Runs everything in parallel (all at the same time)
      mergeMap(id => of('Item ' + id))
    ).subscribe(item => {
      this.mergeResult += item + ' | ';
    });
  }

  // ==================== 6. TAKEUNTIL ====================
  startCounter() {
    this.takeResult = 'Counting... ';

    // interval(500) = emit a number every 500 milliseconds
    interval(500).pipe(
      // takeUntil = keep emitting until this inner observable emits something
      // Here it will stop after 3 seconds (because of debounceTime)
      takeUntil(of('stop').pipe(debounceTime(3000)))
    ).subscribe(count => {
      this.takeResult += count + ' ';
    });
  }
}
