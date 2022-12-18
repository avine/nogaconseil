import '@scullyio/scully-plugin-puppeteer';

import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'nogaconseil',
  distFolder: './dist/nogaconseil',
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {},
};
