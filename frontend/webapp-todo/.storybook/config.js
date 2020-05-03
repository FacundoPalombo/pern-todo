import { configure } from '@storybook/react';
import '@storybook/addon-console';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
configure(require.context('../src', true, /\.(stories|story)\.(js|jsx)$/), module);