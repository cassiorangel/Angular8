import { TestBed, async, inject } from '@angular/core/testing';

import { PokemonGuard } from './pokemon.guard';

describe('PokemonGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonGuard]
    });
  });

  it('should ...', inject([PokemonGuard], (guard: PokemonGuard) => {
    expect(guard).toBeTruthy();
  }));
});
