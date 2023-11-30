import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(
    private router: Router,
    private movieService: MovieService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  goToDetails(id: number) {
    this.router.navigate(['/movies', id]);
  }
  addToWatchlist(movie: Movie) {
    this.localStorageService.addToWatchlist(movie);
  }
  removeFromWatchlist(movie: Movie) {
    this.localStorageService.removeFromWatchlist(movie);
  }

  getButtonText(movie: Movie): string {
    return this.localStorageService.isInWatchlist(movie)
      ? 'Added to Watchlist'
      : 'Add to Watchlist';
  }

  sortMovies(criteria: string) {
    if (criteria === 'title') {
      this.movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === 'releaseDate') {
      this.movies.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
    } else if (criteria === 'ratingAsc') {
      this.movies.sort((a, b) => a.rating - b.rating);
    } else if (criteria === 'ratingDes') {
      this.movies.sort((a, b) => b.rating - a.rating);
    }
  }
}
