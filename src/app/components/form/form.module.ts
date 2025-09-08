import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromForm from './reducers/form.reducer';
import { FormEffects } from './effects/form.effects';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromForm.formFeatureKey, fromForm.reducer),
    EffectsModule.forFeature([FormEffects]),
  ],
  exports: [FormComponent],
})
export class AppFormModule {}
