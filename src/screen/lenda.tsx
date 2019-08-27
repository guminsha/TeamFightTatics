import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import QuadradoLendas from './../components/quadradoLendas'

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
        <Text style={styles.logo}>Lendas</Text>
        <QuadradoLendas>
          <Text style={styles.serie}>Padrão/Inicial</Text>
          <Image source={require('../../assets/img/Lendas/Icones/River_Sprite.png')} style={styles.lenda}></Image>
        </QuadradoLendas>
        <QuadradoLendas>
          <Text style={styles.serie}>Série 1</Text>
          <Image source={require('../../assets/img/Lendas/Icones/Furyhorn_Molten_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('../../assets/img/Lendas/Icones/Hauntling_Shadow_Isles_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('../../assets/img/Lendas/Icones/Silverwing_Demacian_Tier_1.png')} style={styles.lenda}></Image>
        </QuadradoLendas>
        <QuadradoLendas>
          <Text style={styles.serie}>Série 2</Text>
          <Image source={require('../../assets/img/Lendas/Icones/Featherknight_Pengu_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('../../assets/img/Lendas/Icones/Runespirit_Sentinel_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('../../assets/img/Lendas/Icones/Molediver_Soft-nosed_Tier_1.png')} style={styles.lenda}></Image>
        </QuadradoLendas>
        <QuadradoLendas>
          <Text style={styles.serie}>Série 3</Text>
          <Image source={require('../../assets/img/Lendas/Icones/Protector_Jeweled_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('../../assets/img/Lendas/Icones/Hushtail_Moontipped_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('../../assets/img/Lendas/Icones/Paddlemar_Jade_Tier_1.png')} style={styles.lenda}></Image>
        </QuadradoLendas>
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
  serie: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    width: '100%',
  },
  lenda: {
    width: 100,
    height: 100,
    margin: 3,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgb(255, 215, 0)',
  },
});