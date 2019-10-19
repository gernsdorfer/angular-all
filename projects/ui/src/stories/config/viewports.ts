import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const viewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  ...INITIAL_VIEWPORTS
};
