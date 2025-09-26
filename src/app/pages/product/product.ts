import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  productId!: number
  private readonly route: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.productId = this.route.snapshot.params['id']
  }
}
