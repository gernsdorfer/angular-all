import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'ui-lib-pagination',
  template: `
    <div class="pagination">
      <div class="prev" *ngIf="currentPage > 1">
        <ng-content select="ui-lib-pagination-prev"></ng-content>
      </div>
      <div class="next" *ngIf="pages > currentPage">
        <ng-content select="ui-lib-pagination-next"></ng-content>
      </div>
      <div class="pages">
        <ng-content select="ui-lib-pagination-pages"></ng-content>
        {{ pages }}
      </div>
      <div class="items-per-page-selection">
        <ng-content select="ui-lib-pagination-items-per-page"></ng-content>
        <select (change)="pageSizeChange.emit($event.target.value)">
          <option
            [value]="pageSize"
            [selected]="pageSize === itemsPerPage"
            *ngFor="let pageSize of [2, 5, 10, 20, 30, 40]"
            >{{ pageSize }}</option
          >
        </select>
      </div>
    </div>
  `,
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  @Input() total: number;
  @Input() currentPage: number;
  @Input() itemsPerPage: number;
  @Input() pages: number;
  @Output() pageSizeChange = new EventEmitter<number>();
}
