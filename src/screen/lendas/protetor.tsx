import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Vibration, Image } from 'react-native';
import QuadradoLendas from '../../components/quadradoLendas'

export interface AppProps {
}

export interface AppState {
}

export default class ProtetorScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../../assets/img/backgroundInicio.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.logo}>Protetor</Text>
        <QuadradoLendas>
          <Text style={styles.rara}>Rara</Text>
          <Text style={styles.origem}>Adornado (Original)</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Jeweled_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Jeweled_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Jeweled_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Majestoso</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Reigning_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Reigning_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Reigning_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Sombrio</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Shadowgem_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Shadowgem_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Shadowgem_Tier_3.png')} style={styles.lenda}></Image>
        </QuadradoLendas>
        <QuadradoLendas>
          <Text style={styles.epica}>Épica</Text>
          <Text style={styles.origem}>Ferino</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Fierce_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Fierce_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Fierce_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Celeste</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Skygem_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Skygem_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Skygem_Tier_3.png')} style={styles.lenda}></Image>
        </QuadradoLendas>
        <QuadradoLendas>
          <Text style={styles.lendaria}>Lendária</Text>
          <Text style={styles.origem}>Solnato</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Sunborn_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Sunborn_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Protetor/Protector_Sunborn_Tier_1.png')} style={styles.lenda}></Image>
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