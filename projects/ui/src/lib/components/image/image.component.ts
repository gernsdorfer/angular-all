import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-image',
  template: `
    <div class="item">
      <img [src]="src" [alt]="alt" />
      <div class="description">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent {
  @Input() routerLink: string | string[];
  @Input() src: string;
  @Input() alt: string;
}
