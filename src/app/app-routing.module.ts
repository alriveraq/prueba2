import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'productoid',
    loadChildren: () => import('./paginas/productoid/productoid.module').then( m => m.ProductoidPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'iniciarsesion',
    loadChildren: () => import('./paginas/iniciarsesion/iniciarsesion.module').then( m => m.IniciarsesionPageModule)
  },
  {
    path: 'carro',
    loadChildren: () => import('./paginas/carro/carro.module').then( m => m.CarroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
