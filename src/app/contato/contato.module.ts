import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatoRoutingModule } from './contato-routing.module';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [EditComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContatoRoutingModule
  ]
})
export class ContatoModule { }
