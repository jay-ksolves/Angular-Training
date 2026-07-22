import { Component } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dom-sanitizer',
  imports: [],
  templateUrl: './dom-sanitizer.html',
  styleUrl: './dom-sanitizer.css',
})
export class DomSanitizers {
  safeContent: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.safeContent = this.sanitizer.bypassSecurityTrustHtml(`
      <h2>Hello <strong>User</strong></h2>
      <a href="https://trusted.com">Link</a>
    `);
  }
}
