import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Vibration, Image, ScrollView } from 'react-native';
import QuadradoLendas from '../../components/quadradoLendas'

export interface AppProps {
}

export interface AppState {
}

export default class AssombrimScreen extends React.Component<AppProps, AppState> {
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
          <Text style={styles.logo}>Assombrim</Text>
          <QuadradoLendas>
            <Text style={styles.rara}>Rara</Text>
            <Text style={styles.origem}>Ilha das Sombras (Original)</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadow_Isles_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadow_Isles_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadow_Isles_Tier_3.png')} style={styles.lenda}></Image>
            <Text style={styles.origem}>Labareda</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Fireborn_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Fireborn_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Fireborn_Tier_3.png')} style={styles.lenda}></Image>
            <Text style={styles.origem}>Venenoso</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Toxic_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Toxic_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Toxic_Tier_3.png')} style={styles.lenda}></Image>
          </QuadradoLendas>
          <QuadradoLendas>
            <Text style={styles.epica}>Épica</Text>
            <Text style={styles.origem}>Matéria Escura</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Dark_Matter_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Dark_Matter_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Dark_Matter_Tier_3.png')} style={styles.lenda}></Image>
            <Text style={styles.origem}>Garra Lunar</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Lunar_Claw_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Lunar_Claw_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Lunar_Claw_Tier_3.png')} style={styles.lenda}></Image>
          </QuadradoLendas>
          <QuadradoLendas>
            <Text style={styles.lendaria}>Lendária</Text>
            <Text style={styles.origem}>Máscara Fantasma</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadowmask_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadowmask_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadowmask_Tier_3.png')} style={styles.lenda}></Image>
          </QuadradoLendas>
        </View>
      </ScrollView>
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