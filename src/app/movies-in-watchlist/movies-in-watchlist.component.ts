import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-movies-in-watchlist',
  templateUrl: './movies-in-watchlist.component.html',
  styleUrls: ['./movies-in-watchlist.component.scss'],
})
export class MoviesInWatchlistComponent implements OnInit{
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.localStorageService.watchlistCount.subscribe((count) => {
      this.moviesInWatchlist = count;
    });
  }

  moviesInWatchlist: number = 0;
  getWatchlistCount() {
    this.moviesInWatchlist = this.localStorageService.getWatchlistCount();
  }
  
}
