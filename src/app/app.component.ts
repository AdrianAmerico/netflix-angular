import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTitles = [
    {
      trailer: 'https://www.youtube.com/embed/5qap5aO4i9A',
      title: 'The Shawshank Redemption',
      cover: './assets/images/guardios-da-galaxia.jpg',
      name: 'The Shawshank Redemption',
      relevance: 1,
      age: 0,
      parts: 1,
      categories: ['Drama', 'Crime'],
      year: 2000,
    },
    {
      trailer: 'https://www.youtube.com/embed/5qap5aO4i9A',
      title: 'The Shawshank Redemption 2',
      cover: './assets/images/guardios-da-galaxia.jpg',
      name: 'The Shawshank Redemption 2',
      relevance: 1,
      age: 12,
      parts: 1,
      categories: ['Drama', 'Crime'],
      year: 2002,
    },
    {
      trailer: 'https://www.youtube.com/embed/5qap5aO4i9A',
      title: 'The Shawshank Redemption 3',
      cover: './assets/images/guardios-da-galaxia.jpg',
      name: 'The Shawshank Redemption 3',
      relevance: 1,
      age: 16,
      parts: 1,
      categories: ['Drama', 'Crime'],
      year: 2008,
    },
    {
      trailer: 'https://www.youtube.com/embed/5qap5aO4i9A',
      title: 'The Shawshank Redemption 4',
      cover: './assets/images/guardios-da-galaxia.jpg',
      name: 'The Shawshank Redemption 4',
      relevance: 1,
      age: 18,
      parts: 1,
      categories: ['Drama', 'Crime'],
      year: 2008,
    },
  ];
}
