import { Component } from '@angular/core';

@Component({
  selector: 'app-i18ndemo',
  imports: [],
  templateUrl: './i18ndemo.html',
  styleUrl: './i18ndemo.css',
})
export class I18ndemo {
  currentLang = 'en';

  // Example data
  books = [
    { id: 1, title: 'The Man Who Mistook His Wife for a Hat', author: 'Oliver Sacks' },
    { id: 2, title: 'Awakenings', author: 'Oliver Sacks' },
  ];

  changeLanguage(lang: string) {
    this.currentLang = lang;
    console.log(`Language changed to: ${lang}`);
  }
}
