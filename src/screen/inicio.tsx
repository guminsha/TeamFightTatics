import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Vibration, Image } from 'react-native';

export interface AppProps {
}

export interface AppState {
}

export default class inicioScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/img/backgroundInicio.jpg')}
      style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.logo}>Novidades</Text>
        <View style={styles.quadrado}>
        </View>
      </View>
    </ImageBackground>)
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  logo: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  quadrado: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lenda: {
    width: 100,
    height: 100,
    margin: 3,
    borderRadius: 5,
  },
  origem: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
  }
});