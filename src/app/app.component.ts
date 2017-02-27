import { Component, ViewEncapsulation } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from '@angular-redux/store';
import { IAppState, IParty, ITables, IMenu,
  rootReducer, middleware, enhancers, reimmutify} from './store';
import { Observable } from 'rxjs';
import { LineupActions, TableActions } from './actions';
import { placedOrders } from './selectors';

@Component({
  selector: 'tb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @select() lineup$: Observable<IParty>;
  @select() tables$: Observable<ITables>;
  @select() menu$: Observable<IMenu>;
  @select(placedOrders) placedOrders$: Observable<any>;

  constructor(private _ngRedux: NgRedux<IAppState>,
    private _tableActions: TableActions,
    private _lineupActions: LineupActions,
    private _devtools: DevToolsExtension)
  {
    const tools = _devtools.enhancer({
      deserializeState: reimmutify
    });
    _ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      tools ? [ ...enhancers, tools ] : enhancers
    );
  }
}
