import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-header-item',
  template: `
    <div class="links">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./header-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderItemComponent {
  @Input() routerLink: string | string[];
}
