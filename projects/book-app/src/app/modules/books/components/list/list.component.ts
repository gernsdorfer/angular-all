import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Books } from 'books-api';
import { Router } from '@angular/router';
import { ListQuerys } from '../../enums/query-params.enum';

@Component({
  selector: 'book-app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() books: Books;
  readonly ListQuerys = ListQuerys;
  constructor(private router: Router) {}

  changePageSize(pageSize: number) {
    this.router.navigate([], {
      queryParams: {
        [ListQuerys.ItemsPerPage]: pageSize,
        [ListQuerys.Page]: 1
      },
      queryParamsHandling: 'merge'
    });
  }
}
