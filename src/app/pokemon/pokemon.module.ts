import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';


@NgModule({
  declarations: [PokemonDetalheComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
