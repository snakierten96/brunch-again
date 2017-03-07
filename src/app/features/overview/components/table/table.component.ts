import { Component, Input, Output, ChangeDetectionStrategy,
  EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IParty } from '../../../../store';

@Component({
  selector: 'tb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() table: any;
  @Input() parties: Observable<IParty>;
  @Output() seatParty: EventEmitter<any> = new EventEmitter<any>();
  partyId: number = -1;
}
