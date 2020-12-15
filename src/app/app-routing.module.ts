import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  },
  {
    path: 'animal-list',
    loadChildren: () => import('./animal-list/animal-list.module').then( m => m.AnimalListPageModule)
  },
  {
    path: 'animal-register',
    loadChildren: () => import('./animal-register/animal-register.module').then( m => m.AnimalRegisterPageModule)
  },
  {
    path: 'animal-register/:id',
    loadChildren: () => import('./animal-register/animal-register.module').then( m => m.AnimalRegisterPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'person-list',
    loadChildren: () => import('./person-list/person-list.module').then( m => m.PersonListPageModule)
  },
  {
    path: 'person-register',
    loadChildren: () => import('./person-register/person-register.module').then( m => m.PersonRegisterPageModule)
  },
  {
    path: 'person-register/:id',
    loadChildren: () => import('./person-register/person-register.module').then( m => m.PersonRegisterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
