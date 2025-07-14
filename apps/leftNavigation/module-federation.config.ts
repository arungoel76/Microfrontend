import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'leftNavigation',

  remotes: ['shell'],

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
