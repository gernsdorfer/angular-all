import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-lib-loading',
  template: '<div class="loader"><div class="ring"></div></div>',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {}
