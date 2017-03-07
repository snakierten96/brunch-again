import { Component, Input, Output, ChangeDetectionStrategy,
  EventEmitter } from '@angular/core';
import { ILineup } from '../../../../store';

@Component({
  selector: 'tb-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineupComponent {
  @Input() lineup: ILineup;
  @Output() partyJoined: EventEmitter<any> = new EventEmitter();
  @Output() partyLeft: EventEmitter<any> = new EventEmitter();
}
