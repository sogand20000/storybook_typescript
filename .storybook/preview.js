import { globalDecorators } from './decorators'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
export const decorators = globalDecorators
