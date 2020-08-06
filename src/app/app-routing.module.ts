import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule)
  },
  { 
    path: '',   
    redirectTo: '/pokemon', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
