import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection-demo.html',

  // Change this line to experiment:
  // changeDetection: ChangeDetectionStrategy.Default, // Try .OnPush too!
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionDemoComponent {
  // Data for Default Strategy
  defaultCount = 0;
  defaultObj = { name: 'Default User', value: 0 };
  defaultLastUpdated = '';

  // Data for OnPush Strategy
  onPushCount = 0;
  onPushObj = { name: 'OnPush User', value: 0 };
  onPushLastUpdated = '';

  constructor(private cdr: ChangeDetectorRef) {}

  // ==================== DEFAULT STRATEGY ====================

  updateDefaultWithTimeout() {
    setTimeout(() => {
      this.defaultCount++;
      this.defaultObj = { ...this.defaultObj, value: this.defaultObj.value + 1 };
      this.defaultLastUpdated = new Date().toLocaleTimeString();
      console.log('Default - Updated via setTimeout');
    }, 1000);
  }

  // ==================== ONPUSH STRATEGY ====================

  updateOnPushWithTimeout() {
    setTimeout(() => {
      this.onPushCount++;
      this.onPushObj = { ...this.onPushObj, value: this.onPushObj.value + 1 };
      this.onPushLastUpdated = new Date().toLocaleTimeString();
      console.log('OnPush - Updated via setTimeout (but may not show without markForCheck)');
    }, 1000);
  }

  updateOnPushWithMarkForCheck() {
    setTimeout(() => {
      this.onPushCount++;
      this.onPushObj = { ...this.onPushObj, value: this.onPushObj.value + 1 };
      this.onPushLastUpdated = new Date().toLocaleTimeString();

      this.cdr.markForCheck(); // Key for OnPush
      console.log('OnPush - Updated with markForCheck()');
    }, 1000);
  }

  updateOnPushWithDetectChanges() {
    setTimeout(() => {
      this.onPushCount++;
      this.onPushObj = { ...this.onPushObj, value: this.onPushObj.value + 1 };
      this.onPushLastUpdated = new Date().toLocaleTimeString();

      this.cdr.detectChanges(); // Runs immediately
      console.log('OnPush - Updated with detectChanges()');
    }, 1000);
  }

  // Helper to demonstrate mutation vs immutable
  mutateOnPushObject() {
    this.onPushObj.name = 'Mutated Name ' + Date.now(); // This often won't update with OnPush
    this.onPushLastUpdated = new Date().toLocaleTimeString();
    console.log('Mutated object directly - OnPush may not detect this');
  }
}

/*
📌 Simple Explanation
Change Detection = Angular’s way of checking “Did the data change? Should I update the UI?”
1. Default Strategy (Left Box)

Angular is very eager. It checks this component almost every time something happens in the app.
Even if you update data inside setTimeout, Angular will usually detect it and update the screen automatically.

→ This is why the Default side updates easily with just setTimeout.

2. OnPush Strategy (Right Box)

Angular is lazy. It skips checking this component unless:
An @Input() changes, or
You manually tell it to check (markForCheck or detectChanges), or
An event happens inside the component


→ That’s why just using setTimeout on the OnPush side often does nothing on screen (even though data changes in the background).

Button-by-Button Explanation
On the OnPush side:

"1. setTimeout Only"
Updates the data after 1 second.
But UI may not update.
Why? OnPush strategy doesn’t automatically check for changes from async code.

"2. setTimeout + markForCheck()"
Updates data + calls this.cdr.markForCheck()
UI updates.
What it demonstrates: markForCheck() tells Angular: “This component has changed, please check it in the next change detection cycle.”

"3. setTimeout + detectChanges()"
Updates data + calls this.cdr.detectChanges()
UI updates immediately.
What it demonstrates: detectChanges() forces Angular to check right now (more powerful but heavier).

"4. Mutate Object Directly"
Directly changes a property inside the object (this.onPushObj.name = ...)
Often UI does NOT update with OnPush.
Demonstrates: OnPush only checks reference changes (new object), not mutations inside the same object.



Summary Table
Button / ActionDefault StrategyOnPush StrategyKey Concept DemonstratedsetTimeout onlyUpdatesUsually no updateDefault is eager, OnPush is lazy+ markForCheck()UpdatesUpdatesHow to manually mark component as dirty+ detectChanges()UpdatesUpdates immediatelyImmediate vs next cycleMutate object (no new reference)UpdatesUsually no updateImmutability is important with OnPush

What You Should Do Now (To Understand Better)

Set changeDetection: ChangeDetectionStrategy.Default → Test all buttons
Change to ChangeDetectionStrategy.OnPush → Test again
Observe the difference clearly


Do you understand better now?
✅ Let's break it down simply and clearly.
I’ll explain what this demo shows, what each button does, and why things happen (especially the difference between Default and OnPush).

🎯 Purpose of This Demo
This demo helps you visually see the difference between:

ChangeDetectionStrategy.Default
ChangeDetectionStrategy.OnPush
How markForCheck() and detectChanges() work
Why immutability matters with OnPush


📌 Simple Explanation
Change Detection = Angular’s way of checking “Did the data change? Should I update the UI?”
1. Default Strategy (Left Box)

Angular is very eager. It checks this component almost every time something happens in the app.
Even if you update data inside setTimeout, Angular will usually detect it and update the screen automatically.

→ This is why the Default side updates easily with just setTimeout.

2. OnPush Strategy (Right Box)

Angular is lazy. It skips checking this component unless:
An @Input() changes, or
You manually tell it to check (markForCheck or detectChanges), or
An event happens inside the component


→ That’s why just using setTimeout on the OnPush side often does nothing on screen (even though data changes in the background).

Button-by-Button Explanation
On the OnPush side:

"1. setTimeout Only"
Updates the data after 1 second.
But UI may not update.
Why? OnPush strategy doesn’t automatically check for changes from async code.

"2. setTimeout + markForCheck()"
Updates data + calls this.cdr.markForCheck()
UI updates.
What it demonstrates: markForCheck() tells Angular: “This component has changed, please check it in the next change detection cycle.”

"3. setTimeout + detectChanges()"
Updates data + calls this.cdr.detectChanges()
UI updates immediately.
What it demonstrates: detectChanges() forces Angular to check right now (more powerful but heavier).

"4. Mutate Object Directly"
Directly changes a property inside the object (this.onPushObj.name = ...)
Often UI does NOT update with OnPush.
Demonstrates: OnPush only checks reference changes (new object), not mutations inside the same object.



Summary Table

Button / ActionDefault StrategyOnPush StrategyKey Concept DemonstratedsetTimeout onlyUpdatesUsually no updateDefault is eager, OnPush is lazy+ markForCheck()UpdatesUpdatesHow to manually mark component as dirty+ detectChanges()UpdatesUpdates immediatelyImmediate vs next cycleMutate object (no new reference)UpdatesUsually no updateImmutability is important with OnPush

What You Should Do Now (To Understand Better)

Set changeDetection: ChangeDetectionStrategy.Default → Test all buttons
Change to ChangeDetectionStrategy.OnPush → Test again
Observe the difference clearly
*/
