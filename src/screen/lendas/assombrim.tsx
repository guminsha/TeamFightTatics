import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Vibration, Image } from 'react-native';

export interface AppProps {
}

export interface AppState {
}

export default class assombrimScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../../assets/img/backgroundInicio.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.logo}>Assombrim</Text>
        <View style={styles.quadrado}>
          <Text style={styles.origem}>Ilha das Sombras</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadow_Isles_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadow_Isles_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadow_Isles_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Venenoso</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Toxic_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Toxic_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Toxic_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Labareda</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Fireborn_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Fireborn_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Fireborn_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Garra Lunar</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Lunar_Claw_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Lunar_Claw_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Lunar_Claw_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Máscara Fantasma</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadowmask_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadowmask_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadowmask_Tier_3.png')} style={styles.lenda}></Image>
          <Text style={styles.origem}>Matéria Escura</Text>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Dark_Matter_Tier_1.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Dark_Matter_Tier_2.png')} style={styles.lenda}></Image>
          <Image source={require('./../../../assets/img/Lendas/Todas/Assombrim/Hauntling_Dark_Matter_Tier_3.png')} style={styles.lenda}></Image>
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