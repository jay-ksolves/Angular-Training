import { 
  Component, Input, OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy, SimpleChanges, 
  DestroyRef, inject, afterNextRender, afterEveryRender
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  standalone: true,
  imports: [],
  template: `
    <div style="border: 2px dashed black; padding: 15px; margin-top: 15px;">
      <h4>Child Component</h4>
      <p>Input Data: {{ data }}</p>
      
      <p>Projected Content:</p>
      <div style="border: 1px solid gray; padding: 10px;">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class LifecycleChild implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() data: string = '';

  constructor() {
    console.log('1. constructor called');

    // Modern Functional Cleanup Hook
    inject(DestroyRef).onDestroy(() => {
      console.log('DestroyRef Callback Fired');
    });

    // Modern DOM Rendering Hooks (Safe for SSR/Zoneless)
    afterNextRender(() => {
      console.log(' afterNextRender Fired (runs once after DOM paint)');
    });

    afterEveryRender(() => {
      console.log(' afterEveryRender Fired (runs after every DOM paint)');
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges Fired. Changes:', changes);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit Fired');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck Fired');
  }

  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit Fired');
  }

  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked Fired');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit Fired');
  }

  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked Fired');
  }

  ngOnDestroy(): void {
    console.log('9. ngOnDestroy Fired');
  }
}
