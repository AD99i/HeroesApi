import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ProductApi } from '../models/product-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyJsonApi {
  private readonly http: HttpClient = inject(HttpClient);

  getProducts(): Observable<ProductApi> {
    return this.http.get<ProductApi>(`${environment.BASE_URL_DUMMY_API}/products`);
  }
}
