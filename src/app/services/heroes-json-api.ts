import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HeroApi} from '../models/hero-api';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroesJsonApi {
  private readonly http: HttpClient = inject(HttpClient);

  getHeroes(): Observable<HeroApi> {
    return this.http.get<HeroApi>(`${environment.BASE_URL_HEROES_API}/all.json`);
  }

  getHeroById(id: number): Observable<HeroApi> {
    return this.http.get<HeroApi>(`${environment.BASE_URL_HEROES_API}/id/${id}.json`);
  }
}
