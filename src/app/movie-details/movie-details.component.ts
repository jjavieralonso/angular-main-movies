import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovie(id).subscribe((movie: Movie) => {
      this.movie = movie;
    });
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
}
