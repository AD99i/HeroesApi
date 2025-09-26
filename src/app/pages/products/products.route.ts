import { Routes } from '@angular/router';
import { Products } from './products';
import { Product } from '../product/product';


export const PRODUCT_ROUTES: Routes = [
    {path: '', component: Products},
    {path: ':id', component: Product},
];