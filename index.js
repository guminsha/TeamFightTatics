import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import TesteScreen from './src/screen/lendas/territo';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(TesteScreen);
