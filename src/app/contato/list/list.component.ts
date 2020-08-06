import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { catchError } from 'rxjs/operators';
import { of, Subscription, Observable } from 'rxjs';
import { Contato } from 'src/app/models/contato';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dadosContato: Subscription;

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
    this.contatoService.getAll()
      .pipe(
        catchError(error => of(console.log(error)))
      )
      .subscribe((res: any) => this.dadosContato = res)
  }

  ngOnDestroy() {
    if (this.dadosContato) {
      this.dadosContato.unsubscribe();
    }

  }
}
