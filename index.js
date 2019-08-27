import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import TesteScreen from './src/screen/lendas/assombrim';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(TesteScreen);
