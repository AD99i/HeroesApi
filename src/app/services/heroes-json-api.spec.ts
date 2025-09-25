import { TestBed } from '@angular/core/testing';

import { HeroesJsonApi } from './heroes-json-api';

describe('HeroesJsonApi', () => {
  let service: HeroesJsonApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesJsonApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
