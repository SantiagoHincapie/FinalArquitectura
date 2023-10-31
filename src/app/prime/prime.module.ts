import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    CardModule,
    InputTextModule,
    ButtonModule,
    DialogModule
  ]
})
export class PrimeModule { }
