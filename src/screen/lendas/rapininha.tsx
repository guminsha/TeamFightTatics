import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Vibration, Image, ScrollView } from 'react-native';
import QuadradoLendas from '../../components/quadradoLendas'

export interface AppProps {
}

export interface AppState {
}

export default class RapininhaScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../../assets/img/backgroundInicio.jpg')}
      style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logo}>Rapininha</Text>
          <QuadradoLendas>
            <Text style={styles.rara}>Rara</Text>
            <Text style={styles.origem}>Demaciana (Original)</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Demacian_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Demacian_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Demacian_Tier_3.png')} style={styles.lenda}></Image>
            <Text style={styles.origem}>Alvorada</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Dawnglow_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Dawnglow_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Dawnglow_Tier_3.png')} style={styles.lenda}></Image>
            <Text style={styles.origem}>Flora</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Rosebloom_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Rosebloom_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Rosebloom_Tier_3.png')} style={styles.lenda}></Image>
          </QuadradoLendas>
          <QuadradoLendas>
            <Text style={styles.epica}>Épica</Text>
            <Text style={styles.origem}>Flor de Inverno</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Snow_Cherry_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Snow_Cherry_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Snow_Cherry_Tier_3.png')} style={styles.lenda}></Image>
            <Text style={styles.origem}>Tropical</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Tropical_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Tropical_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Tropical_Tier_3.png')} style={styles.lenda}></Image>
          </QuadradoLendas>
          <QuadradoLendas>
            <Text style={styles.lendaria}>Lendária</Text>
            <Text style={styles.origem}>Perdida</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Lost_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Lost_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Rapininha/Silverwing_Lost_Tier_3.png')} style={styles.lenda}></Image>
          </QuadradoLendas>
        </View>
      </ScrollView>
    </ImageBackground >)
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
  lenda: {
    width: 100,
    height: 100,
    margin: 3,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgb(255, 215, 0)',
  },
  origem: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
  },
  rara: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    width: '100%',
  },
  epica: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    width: '100%',
  },
  lendaria: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    width: '100%',
  }
});