import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-sort',
  templateUrl: './movie-sort.component.html',
  styleUrls: ['./movie-sort.component.scss'],
})
export class MovieSortComponent {
  @Output() sortMovies = new EventEmitter<string>();

  sort(criteria: string) {
    this.sortMovies.emit(criteria);
  }
  
}
