import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'plugin-a',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
