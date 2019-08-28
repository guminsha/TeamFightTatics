import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Video } from 'expo-av';
import  Quadrado  from './../components/quadrado'

export interface AppProps {
}

export interface AppState {
}

export default class InicioScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/img/backgroundInicio.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.logo}>Bem vindo</Text>
        <Video
          source={{ uri: 'https://scontent.fymy1-1.fna.fbcdn.net/v/t39.24130-6/10000000_484198832157109_8339035961586355793_n.mp4?_nc_cat=102&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_oc=AQmAbcKol9wp36p61d_YoYVG9b4EeFyePkvb_bLa01v3TvntFjzR8OAkgSPff_-EcYBK638RHbagCcpeIHt93Hyv&_nc_ht=scontent.fymy1-1.fna&oh=5035301fd8d03c180a5c37c64aabcbed&oe=5DCAB0BA' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          useNativeControls
          style={{ width: '100%', height: '50%', marginTop: 20, alignContent: 'center', borderRadius: 10 }}
        />

        <Quadrado>
          <Text style={styles.tituloVideo}>Leona AP Feellings</Text>
          <Text style={styles.tituloVideo}>Créditos: Página "TFT só tem maníaco"</Text>
        </Quadrado>
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
    fontSize: 34,
    textAlign: 'center',
  },
  tituloVideo: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
  },
});