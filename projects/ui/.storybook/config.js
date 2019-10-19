import { configure } from '@storybook/angular';
import 'storybook-chromatic';
const req = require.context('../src/', true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
