import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'add',
    loadComponent: () => import('./add/add.page').then( m => m.AddPage)
  },
  {
  path: 'recipe/:id',
  loadComponent: () => import('./recipe/recipe.page').then(m => m.RecipePage)
  }

];
