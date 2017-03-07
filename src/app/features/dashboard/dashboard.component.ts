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
  @select(placedOrders) placedOrders$: Observable<any>;

  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  ];

  constructor() { }

}
