import { storiesOf } from '@storybook/angular';
import { text, number, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { viewports } from './config/viewports';
import { backgroundColors } from './config/colors';
import { HeaderComponent } from '../lib/components';

storiesOf('UI', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addParameters({
    viewport: { viewports }
  })
  .addParameters({
    backgrounds: backgroundColors
  })
  .add(
    'header',
    () => {
      const headerContent = text('text', 'my Header');
      const counter = number('counter', 1);

      return {
        moduleMetadata: {
          declarations: [HeaderComponent]
        },
        template: `<lib-ui-header >${headerContent}</lib-ui-header>`
      };
    },
    {
      notes: 'default render header component'
    }
  );
