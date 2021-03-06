import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { IAppState, IParty, ITables, IMenu } from '../../store';
import { Observable } from 'rxjs/Observable';
import { LineupActions, TableActions } from '../../actions';
import { placedOrders } from '../../selectors';

@Component({
  selector: 'tb-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @select() lineup$: Observable<IParty>;
  @select() tables$: Observable<ITables>;
  @select() menu$: Observable<IMenu>;
  @select(placedOrders) placedOrders$: Observable<any>;

  constructor(
    private _tableActions: TableActions,
    private _lineupActions: LineupActions
  ) {}
}
