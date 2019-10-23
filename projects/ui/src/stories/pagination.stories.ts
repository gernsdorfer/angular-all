import { moduleMetadata, storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { viewports } from './config/viewports';
import { backgroundColors } from './config/colors';
import { PaginationComponent } from '../lib/components/pagination/pagination.component';
import { NextComponent } from '../lib/components/pagination/next/next.component';
import { PrevComponent } from '../lib/components/pagination/prev/prev.component';
import { PagesComponent } from '../lib/components/pagination/pages/pages.component';
import { ItemsPerPageComponent } from '../lib/components/pagination/items-per-page/items-per-page.component';

storiesOf('pagination', module)
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
        PaginationComponent,
        NextComponent,
        PrevComponent,
        PagesComponent,
        ItemsPerPageComponent
      ]
    })
  )
  .add(
    'one page',
    () => {
      return {
        template: `<ui-lib-pagination [currentPage]="1"  [pages]="1" [itemsPerPage]="10">
                        <ui-lib-pagination-next>next</ui-lib-pagination-next>
                        <ui-lib-pagination-prev>prev</ui-lib-pagination-prev>
                        <ui-lib-pagination-pages>Pages:</ui-lib-pagination-pages>
                        <ui-lib-pagination-items-per-page>items per page:</ui-lib-pagination-items-per-page>
                    </ui-lib-pagination>`
      };
    },
    {
      notes: 'complete list'
    }
  )
  .add(
    'second page with 5 pages',
    () => {
      return {
        template: `<ui-lib-pagination [currentPage]="2" [pages]="5" [itemsPerPage]="20">
                        <ui-lib-pagination-next>next</ui-lib-pagination-next>
                        <ui-lib-pagination-prev>prev</ui-lib-pagination-prev>
                        <ui-lib-pagination-pages>Pages:</ui-lib-pagination-pages>
                        <ui-lib-pagination-items-per-page>items per page:</ui-lib-pagination-items-per-page>
                    </ui-lib-pagination>`
      };
    },
    {
      notes: 'complete list'
    }
  )
  .add(
    'last page with 5 pages',
    () => {
      return {
        template: `<ui-lib-pagination [currentPage]="5" [pages]="5" [itemsPerPage]="20">
                        <ui-lib-pagination-next>next</ui-lib-pagination-next>
                        <ui-lib-pagination-prev>prev</ui-lib-pagination-prev>
                        <ui-lib-pagination-pages>Pages:</ui-lib-pagination-pages> 
                        <ui-lib-pagination-items-per-page>items per page:</ui-lib-pagination-items-per-page>
                    </ui-lib-pagination>`
      };
    },
    {
      notes: 'complete list'
    }
  )
  .add(
    'first page with 5 pages',
    () => {
      return {
        template: `<ui-lib-pagination [currentPage]="1"  [pages]="5" [itemsPerPage]="10">
                        <ui-lib-pagination-next>next</ui-lib-pagination-next>
                        <ui-lib-pagination-prev>prev</ui-lib-pagination-prev>
                        <ui-lib-pagination-pages>Pages:</ui-lib-pagination-pages> 
                        <ui-lib-pagination-items-per-page>items per page: </ui-lib-pagination-items-per-page>
                    </ui-lib-pagination>`
      };
    },
    {
      notes: 'complete list'
    }
  );
