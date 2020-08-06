import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { map, take, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
    this.contatoService.getAll()
      .pipe(
        catchError(error => of(console.log(error)))
      )
      .subscribe((res: any[]) => console.log(res))      
  }

}
