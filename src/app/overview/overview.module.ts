import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { APP_COMPONENTS } from '../components';

import { LineupActions, TableActions } from '../actions';
import { PartyService } from '../services';

@NgModule({
  declarations: [
    OverviewComponent,
    APP_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    OverviewRoutingModule
  ],
  providers: [
    LineupActions,
    TableActions,
    PartyService
  ]
})
export class OverviewModule { }
