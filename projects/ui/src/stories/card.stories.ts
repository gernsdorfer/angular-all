import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { viewports } from './config/viewports';
import { backgroundColors } from './config/colors';
import { CardHeaderComponent } from '../lib/components/card/card-header/card-header.component';
import { CardComponent } from '../lib/components/card/card.component';
import { CardBodyComponent } from '../lib/components/card/card-body/card-body.component';
import { CardFooterComponent } from '../lib/components/card/card-footer/card-footer.component';

const images: { link: string; src: string; title: string }[] = [
  {
    src: 'https://dummyimage.com/100x100/ffcccc/00',
    title: 'image 1',
    link: '/image1'
  }
];

storiesOf('card', module)
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
      declarations: [
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        CardFooterComponent
      ]
    })
  )
  .add(
    'ui-lib-image-gallery-item',
    () => {
      return {
        template: `
            <ui-lib-card>
                <ui-lib-card-header>
                <h2>Header</h2>
                </ui-lib-card-header>
                <ui-lib-card-body>
                    <div>
                        <img src="https://dummyimage.com/100x100/ffcccc/00" alt="demo image">
                    </div>
                    My Card Body 
                </ui-lib-card-body>
                <ui-lib-card-footer>
                 footer with Link <a href="../">back</a>
                </ui-lib-card-footer>
            </ui-lib-card>`,
        props: { images }
      };
    },
    {
      notes: 'card with header and body'
    }
  );
