import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '@core/model/interfaces';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../../core/state/user-actions/user.actions';

@Component({
  selector: 'ab-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss'],
})
export class UsuarioPerfilComponent implements OnInit {

  userData$!: Observable<User[]>
  user: User[] = [];

  constructor( private store: Store<any>) { this.store.dispatch(UserActions.getUserData()) }

  ngOnInit(): void {
    console.log(this.userData$)
  }

  dataUser(dataUser: any) {
    this.userData$ = this.store.select(dataUser);
  }
}

