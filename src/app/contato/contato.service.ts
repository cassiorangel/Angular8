import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../models/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(
    private fb: AngularFireDatabase,
    private http: HttpClient
  ) { }

  insert(contato: Contato) {
    this.fb.list('contato').push(contato)
      .then((result: any) => console.log(result.key) )
  }
  update(contato: Contato, key: string) {
    this.fb.list('contato').update(key, contato)
    .catch((error: any) => console.log(error))
  }

  delete(key: string) {
    return    this.fb.object(`contato/${key}`).remove();
  }
  getAll() {
    return this.fb.list('contato')
      .snapshotChanges()
        .pipe(
          map(change => {
            return change.map(c => ({ key: c.payload.key, ...c.payload.val() }));
          })
        )
  }

}

