// movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from './movie.model';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Tenet',
      description:
        'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      rating: 7.8,
      duration: '2h 30min',
      genre: 'Action, Sci-Fi',
      releaseDate: '03-09-2020',
      coverImage: 'assets/images/Tenet.png',
      trailerLink: 'https://www.youtube.com/embed/LdOM0x0XDMo',
    },
    {
      id: 2,
      title: 'Spider-Man: Into the Spider-Verse',
      description:
        'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
      rating: 8.4,
      duration: '1h 57min',
      genre: 'Action, Animation, Adventure',
      releaseDate: '14-12-2018',
      coverImage: 'assets/images/Spider-Man.png',
      trailerLink: 'https://www.youtube.com/embed/tg52up16eq0',
    },
    {
      id: 3,
      title: 'Knives Out',
      description:
        'A detective investigates the death of a patriarch of an eccentric, combative family.',
      rating: 7.9,
      duration: '2h 10min',
      genre: 'Comedy, Crime, Drama',
      releaseDate: '27-11-2019',
      coverImage: 'assets/images/KnivesOut.png',
      trailerLink: "https://www.youtube.com/embed/qGqiHJTsRkQ",
    },
    {
      id: 4,
      title: 'Guardians of the Galaxy',
      description:
        'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
      rating: 8.0,
      duration: '2h 1min',
      genre: 'Action, Adventure, Comedy',
      releaseDate: '01-08-2014',
      coverImage: 'assets/images/gotg.png',
      trailerLink: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
    },
    {
      id: 5,
      title: 'Avengers: Age of Ultron',
      description:
        "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      rating: 7.3,
      duration: '2h 21min',
      genre: 'Action, Adventure, Sci-Fi',
      releaseDate: '01-05-2015',
      coverImage: 'assets/images/Avengers.png',
      trailerLink: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
    },
  ];

  getMovie(id: number): Observable<Movie> {
    const movie = this.movies.find((m) => m.id === id);
    return of(movie).pipe(
      filter((m) => m !== undefined),
      map((m) => m as Movie)
    );
  }
  getMovies(): Movie[] {
    return this.movies;
  }
}
