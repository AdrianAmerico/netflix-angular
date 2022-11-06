import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuOpened = false;
  listTitles = [
    {
      trailer: 'assets/videos/Iron Man 2 Official Trailer #1 (2010) - Marvel Movie HD.mp4',
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
      trailer:
        './assets/videos/capitao_america_o_primeiro_vingador_trailer__360p.mp4',
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
      trailer:
        './assets/videos/capitao_america_o_primeiro_vingador_trailer__360p.mp4',
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
      trailer:
        './assets/videos/capitao_america_o_primeiro_vingador_trailer__360p.mp4',
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

  public setMenuState(state: boolean) {
    this.menuOpened = state;
  }

  public closeMenu() {
    this.menuOpened = false;
  }
}
