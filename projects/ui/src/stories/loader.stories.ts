import { moduleMetadata, storiesOf } from '@storybook/angular';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { viewports } from './config/viewports';
import { backgroundColors } from './config/colors';
import { LoaderComponent } from '../lib/components';
import { withNotes } from '@storybook/addon-notes';

storiesOf('loader', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addParameters({
    viewport: { viewports }
  })
  .addParameters({
    backgrounds: backgroundColors
  })
  .add(
    'ui-lib-loading',
    withNotes(
      'Testing the background color for the editable area by setting it to red'
    )(() => ({
      component: LoaderComponent
    }))
  );
