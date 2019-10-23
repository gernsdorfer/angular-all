import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { viewports } from './config/viewports';
import { backgroundColors } from './config/colors';
import { ImageComponent } from '../lib/components/image/image.component';

storiesOf('image', module)
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
      declarations: [ImageComponent]
    })
  )
  .add(
    'ui-lib-image-gallery-item',
    () => {
      return {
        template: `<ui-lib-image alt="demo text" routerLink="/" src="https://dummyimage.com/100x100/ffcccc/00" >test title</ui-lib-image>`
      };
    },
    {
      notes: 'single image item'
    }
  );
