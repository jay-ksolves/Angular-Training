import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

// RxJS imports
import { of, from, interval, Subject } from 'rxjs';
import { map, filter, debounceTime, switchMap, mergeMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class RxjsComponent implements OnDestroy {

  // These variables hold the results to display on the screen
  mapResult = '';
  filterResult = '';
  debounceResult = '';
  switchResult = '';
  mergeResult = '';
  takeResult = '';

  // This Subject is used to stop the counter in takeUntil example
  private stopCounter$ = new Subject<void>();

  // Cleanup when user leaves the component
  ngOnDestroy() {
    this.stopCounter$.next();
    this.stopCounter$.complete();
  }

  // ==================== 1. MAP ====================
  runMap() {
    // of(3) creates a simple Observable that emits one value: 3
    of(3).pipe(
      // map() transforms each value. Here 3 becomes 30.
      map(number => number * 10)
    ).subscribe(result => {
      // Save result so Angular can show it in HTML
      this.mapResult = 'Result: ' + result;
    });
  }

  // ==================== 2. FILTER ====================
  runFilter() {
    this.filterResult = ''; // clear previous result

    // from() creates Observable from an array
    from([1, 2, 3, 4, 5, 6]).pipe(
      // filter() only lets values through if condition is true
      filter(n => n % 2 === 0)   // keep only even numbers
    ).subscribe(n => {
      this.filterResult += n + ' ';
    });
  }

  // ==================== 3. DEBOUNCETIME ====================
  onType(event: any) {
    const text = event.target.value; // get what user typed

    of(text).pipe(
      // debounceTime waits for user to stop typing before emitting
      debounceTime(800)
    ).subscribe(value => {
      this.debounceResult = 'You typed: ' + value;
    });
  }

  // ==================== 4. SWITCHMAP ====================
  runSwitchMap() {
    this.switchResult = 'Loading...';

    of(1).pipe(
      // switchMap cancels old observable and starts new one
      // Very important for search boxes
      switchMap(() => of('Data Loaded Successfully'))
    ).subscribe(result => {
      this.switchResult = result;
    });
  }

  // ==================== 5. MERGEMAP ====================
  runMergeMap() {
    this.mergeResult = '';

    from([1, 2, 3]).pipe(
      // mergeMap runs all inner observables in parallel
      mergeMap(id => of('Item ' + id))
    ).subscribe(item => {
      this.mergeResult += item + ' | ';
    });
  }

  // ==================== 6. TAKEUNTIL ====================
  startCounter() {
    this.takeResult = 'Counting... ';

    // Create a fresh stop subject
    this.stopCounter$ = new Subject<void>();

    // interval emits increasing numbers every 500ms
    interval(500).pipe(
      // takeUntil stops everything when stopCounter$ emits
      takeUntil(this.stopCounter$)
    ).subscribe(count => {
      this.takeResult += count + ' ';
    });
  }

  // Manual stop button
  stopCounter() {
    this.stopCounter$.next();           // send stop signal
    this.takeResult += ' → Stopped!';
  }
}
