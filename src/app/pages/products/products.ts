import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product-api';
import { DummyJsonApi } from '../../services/dummy-json-api';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  // Signal pour gérer l'état des produits
  products = signal<Product[]>([]);
  // Signal pour gérer l'état de chargement
  loading = signal<boolean>(true);

  // Injection du Service qui interroge l'api
  private readonly dummyJsonApi: DummyJsonApi = inject(DummyJsonApi);

  // Expose Math.round pour le template
  Math = Math;

  // Fecth des produits lors de l'init du component
  ngOnInit() {
    /*
     Abonnement à l'observable pour récéption des ressources
     next (reçoit une fn => ) => succes
     error (reçoit une fn => ) => catch
     */
    this.dummyJsonApi.getProducts().subscribe({
      next: data => {
        this.products.set(data.products);
        this.loading.set(false);
      },
      error: error => {
        console.error(error);
        this.loading.set(false);
      }
    });
  }
}
