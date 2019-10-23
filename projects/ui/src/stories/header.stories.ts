import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { viewports } from './config/viewports';
import { backgroundColors } from './config/colors';
import { HeaderComponent } from '../lib/components';
import { HeaderItemComponent } from '../lib/components/header/header-item/header-item.component';

storiesOf('header', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addParameters({
    viewport: { viewports }
  })
  .addParameters({
    backgrounds: backgroundColors
  })
  .addDecorator(
    moduleMetadata({
      declarations: [HeaderComponent, HeaderItemComponent]
    })
  )
  .add(
    'ui-lib-header',
    () => {
      return {
        template: `<ui-lib-header >
                        <ui-lib-header-item routerLink="/">Link A</ui-lib-header-item>
                        <ui-lib-header-item routerLink="/">Link B</ui-lib-header-item>
                        <ui-lib-header-item routerLink="/"><a href="#">Link C</a></ui-lib-header-item>
                    </ui-lib-header>`
      };
    },
    {
      notes: 'complete header'
    }
  );
