import { userDataReducers } from '@core/state/user-reducers/userData.reducers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature( 'UserDataFeatureKey', userDataReducers),
  ]
})
export class StateModule { }
