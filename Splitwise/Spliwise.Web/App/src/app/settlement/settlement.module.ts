import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettlementRoutingModule } from './settlement-routing.module';
import { SettlementComponent } from './settlement/settlement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SettlementComponent],
  imports: [
    CommonModule,
    SettlementRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class SettlementModule { }
