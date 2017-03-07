import { Component, ViewEncapsulation } from '@angular/core';
import { DevToolsExtension, NgRedux } from '@angular-redux/store';
import { IAppState, IParty, ITables, IMenu,
  rootReducer, middleware, enhancers, reimmutify} from './store';

import { INavItem, NAVITEMS } from './app.navigation';

@Component({
  selector: 'tb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  navItems: INavItem[] = NAVITEMS;

  constructor(private _ngRedux: NgRedux<IAppState>,
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
