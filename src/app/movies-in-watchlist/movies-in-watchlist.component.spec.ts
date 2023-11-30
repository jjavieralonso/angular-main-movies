import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInWatchlistComponent } from './movies-in-watchlist.component';

describe('MoviesInWatchlistComponent', () => {
  let component: MoviesInWatchlistComponent;
  let fixture: ComponentFixture<MoviesInWatchlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesInWatchlistComponent]
    });
    fixture = TestBed.createComponent(MoviesInWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
