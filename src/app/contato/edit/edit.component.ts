import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contatoForm
  constructor(
    private fb: FormBuilder,
    private contatoService: ContatoService
  ) { }

 

  ngOnInit() {
    this.contatoForm = this.fb.group({
      nome: [null],
      telefone: [null]
    });
  }
  onSubmit() {
    console.log(this.contatoForm.value)
    let contato = this.contatoForm.value
    this.contatoService.insert(contato)

  }

}
