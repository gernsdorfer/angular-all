import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Book, Comments } from 'books-api';

@Component({
  selector: 'book-app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
  @Input() book: Book;
  @Input() comments: Comments;
}
