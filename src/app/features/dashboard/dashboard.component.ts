import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { IAppState, IParty, ITables, IMenu } from '../../store';
import { Observable } from 'rxjs';
import { placedOrders } from '../../selectors';

@Component({
  selector: 'tb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor() { }

}
