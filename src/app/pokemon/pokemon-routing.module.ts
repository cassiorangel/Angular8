import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
