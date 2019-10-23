import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { viewports } from './config/viewports';
import { backgroundColors } from './config/colors';
import { ListComponent } from '../lib/components/list/list.component';
import { ItemComponent } from '../lib/components/list/item/item.component';

storiesOf('list', module)
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
      declarations: [ListComponent, ItemComponent]
    })
  )
  .add(
    'ui-lib-list-item',
    () => {
      return {
        template: `
            <ui-lib-list >
                <ui-lib-list-item >Demo Text 1</ui-lib-list-item>
                <ui-lib-list-item >Demo Text 2</ui-lib-list-item>
                <ui-lib-list-item >Demo Text 3</ui-lib-list-item>
                <ui-lib-list-item >Demo Text 4</ui-lib-list-item>
                <ui-lib-list-item >Demo Text 5</ui-lib-list-item>
                <ui-lib-list-item >Demo Text 6</ui-lib-list-item>
            </ui-lib-list>
`
      };
    },
    {
      notes: 'complete list'
    }
  );
