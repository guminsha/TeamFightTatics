import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Vibration, Image } from 'react-native';
import QuadradoLendas from '../../components/quadradoLendas'

export interface AppProps {
}

export interface AppState {
}

export default class TerritoScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../../assets/img/backgroundInicio.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.logo}>Territo</Text>
        <QuadradoLendas>
          <Text style={styles.rara}>Rara</Text>
          <Text style={styles.origem}>Blindado (Original)</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Soft-nosed_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Soft-nosed_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Soft-nosed_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Bombeiro</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Blazebattle_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Blazebattle_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Blazebattle_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Ribeirinho</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Fresh-water_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Fresh-water_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Fresh-water_Tier_3.png')} style={styles.lenda}></Image>
        </QuadradoLendas>
        <QuadradoLendas>
          <Text style={styles.epica}>Épica</Text>
          <Text style={styles.origem}>Desastrado</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Clumsy_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Clumsy_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Clumsy_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Venenoso</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Toxic_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Toxic_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Toxic_Tier_3.png')} style={styles.lenda}></Image>
        </QuadradoLendas>
        <QuadradoLendas>
          <Text style={styles.lendaria}>Lendária</Text>
          <Text style={styles.origem}>Colorido</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Skydance_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Skydance_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Territo/Molediver_Skydance_Tier_3.png')} style={styles.lenda}></Image>
        </QuadradoLendas>
      </View>
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