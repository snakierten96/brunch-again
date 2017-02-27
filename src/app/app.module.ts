import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgReduxModule } from '@angular-redux/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_COMPONENTS } from './components';
import { LineupActions, TableActions } from './actions';
import { PartyService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    NgReduxModule,
    AppRoutingModule
  ],
  providers: [
    LineupActions,
    TableActions,
    PartyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
