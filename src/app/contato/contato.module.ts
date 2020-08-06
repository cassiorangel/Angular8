import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [EditComponent, ListComponent],
  imports: [
    CommonModule,
    ContatoRoutingModule
  ]
})
export class ContatoModule { }
