/*

DISABLED FOR WEB - NOT REQUIRED FOR THIS PROJECT

import { WebPlugin } from '@capacitor/core';
import { WavRecorderPluginPlugin } from './definitions';

export class WavRecorderPluginWeb extends WebPlugin implements WavRecorderPluginPlugin {
  constructor() {
    super({
      name: 'WavRecorderPlugin',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const WavRecorderPlugin = new WavRecorderPluginWeb();

export { WavRecorderPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(WavRecorderPlugin);

*/
