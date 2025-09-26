import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Superhero } from '../models/superhero';

@Injectable({
  providedIn: 'root'
})
export class SuperheroApi {
  private readonly http: HttpClient = inject(HttpClient);

  getHeroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`${environment.BASE_URL_SUPERHERO_API}/all.json`);
  }

  getHero(id: number): Observable<Superhero> {
    return this.http.get<Superhero>(`${environment.BASE_URL_SUPERHERO_API}/id/${id}.json`);
  }
}