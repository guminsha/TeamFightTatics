import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface AppProps {
}

export interface AppState {
}

export default class PantheonScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>PANTHEON aksdjasdksadasmdasdnsankdnkasnkdasnkdnkaskndknasdknsankdnknkdaskndnksadkasnkdanknksdnk</Text>
      </View>
    );
  }
}
