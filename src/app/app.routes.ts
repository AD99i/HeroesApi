import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { Heroes } from './pages/heroes/heroes';
import { HeroDetail } from './pages/hero-detail/hero-detail';

import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'heroes', component: Heroes},
    {path: 'heroes/:id', component: HeroDetail},
    {path: 'products', loadChildren: () => import('./pages/products/products.route').then(m => m.PRODUCT_ROUTES)},
    {path: 'admin', canActivate: [adminGuard], loadChildren: () => import('./pages/admin/admin.route').then(m => m.ADMIN_ROUTES)},
    {path: '**', component: NotFound }
];
