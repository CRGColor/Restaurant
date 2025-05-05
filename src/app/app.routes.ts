import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'restaurants', pathMatch: 'full' },

    { path: 'restaurants', loadComponent: () => import('./restaurant/restaurant-list/restaurant-list.component').then(m => m.RestaurantListComponent) },
    { path: 'restaurants/new', loadComponent: () => import('./restaurant/restaurant-form/restaurant-form.component').then(m => m.RestaurantFormComponent) },
    { path: 'restaurants/:id', loadComponent: () => import('./restaurant/restaurant-details/restaurant-details.component').then(m => m.RestaurantDetailsComponent) },
    { path: 'restaurants/:id/edit', loadComponent: () => import('./restaurant/restaurant-form/restaurant-form.component').then(m => m.RestaurantFormComponent) },

    { path: 'dish/new', loadComponent: () => import('./dish/dish-form/dish-form.component').then(m => m.DishFormComponent) },
    { path: 'dish/:id', loadComponent: () => import('./dish/dish-details/dish-details.component').then(m => m.DishDetailsComponent) },
    { path: 'dish/:id/edit', loadComponent: () => import('./dish/dish-form/dish-form.component').then(m => m.DishFormComponent) }
];
