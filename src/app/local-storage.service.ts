import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  watchlistCount = new BehaviorSubject<number>(0);
  addToWatchlist(movie: Movie) {
    let watchlist = this.getWatchlist();
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    this.watchlistCount.next(this.getWatchlist().length);
  }
  removeFromWatchlist(movie: Movie) {
    let watchlist = this.getWatchlist();
    watchlist = watchlist.filter((m) => m.id !== movie.id);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    this.watchlistCount.next(this.getWatchlist().length);
  }

  getWatchlist(): Movie[] {
    let watchlist = localStorage.getItem('watchlist');
    return watchlist ? JSON.parse(watchlist) : [];
  }

  getWatchlistCount(): number {
    return this.getWatchlist().length;
  }
  isInWatchlist(movie: Movie): boolean {
    const watchlist = this.getWatchlist();
    return watchlist.some((m) => m.id === movie.id);
  }
}
