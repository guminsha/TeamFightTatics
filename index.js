import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import testeScreen from './src/screen/teste';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(testeScreen);
