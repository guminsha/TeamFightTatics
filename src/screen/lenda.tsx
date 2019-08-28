import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Quadrado from './../components/quadrado'
import { ScrollView } from 'react-native-gesture-handler';

export interface AppProps {
  navigation: any;
}

export interface AppState {
}

export default class LendaScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source={require('./../../assets/img/backgroundInicio.jpg')}
      style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logo}>Lendas</Text>
          <Quadrado>
            <Text style={styles.serie}>Padrão/Inicial</Text>
            <Image source={require('../../assets/img/Lendas/Todas/Espirito/River_Sprite.png')} style={styles.lenda}></Image>
          </Quadrado>
          <Quadrado>
            <View style={{ width: '100%', alignItems: 'center', }}>
              <Image source={require('../../assets/img/Lendas/Ovos/Teamfight_Tactics_2019_Egg1.png')} style={styles.ovo}></Image>
            </View>
            <Text style={styles.serie}>Série 1</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ranzinzim')}>
              <Image source={require('../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Molten_Tier_1.png')} style={styles.lenda}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('assombrim')}>
              <Image source={require('../../assets/img/Lendas/Todas/Assombrim/Hauntling_Shadow_Isles_Tier_1.png')} style={styles.lenda}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('rapininha')}>
              <Image source={require('../../assets/img/Lendas/Todas/Rapininha/Silverwing_Demacian_Tier_1.png')} style={styles.lenda}></Image>
            </TouchableOpacity>
          </Quadrado>
          <Quadrado>
            <View style={{ width: '100%', alignItems: 'center', }}>
              <Image source={require('../../assets/img/Lendas/Ovos/Teamfight_Tactics_2019_Egg2.png')} style={styles.ovo}></Image>
            </View>
            <Text style={styles.serie}>Série 2</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('plumario')}>
              <Image source={require('../../assets/img/Lendas/Todas/Plumario/Featherknight_Pengu_Tier_1.png')} style={styles.lenda}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('runirim')}>
              <Image source={require('../../assets/img/Lendas/Todas/Runirim/Runespirit_Sentinel_Tier_1.png')} style={styles.lenda}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('territo')}>
              <Image source={require('../../assets/img/Lendas/Todas/Territo/Molediver_Soft-nosed_Tier_1.png')} style={styles.lenda}></Image>
            </TouchableOpacity>
          </Quadrado>
          <Quadrado>
            <View style={{ width: '100%', alignItems: 'center', }}>
              <Image source={require('../../assets/img/Lendas/Ovos/Teamfight_Tactics_2019_Egg3.png')} style={styles.ovo}></Image>
            </View>
            <Text style={styles.serie}>Série 3</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('protetor')}>
              <Image source={require('../../assets/img/Lendas/Todas/Protetor/Protector_Jeweled_Tier_1.png')} style={styles.lenda}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('felpina')}>
              <Image source={require('../../assets/img/Lendas/Todas/Felpina/Hushtail_Moontipped_Tier_1.png')} style={styles.lenda}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('taluga')}>
              <Image source={require('../../assets/img/Lendas/Todas/Taluga/Paddlemar_Jade_Tier_1.png')} style={styles.lenda}></Image>
            </TouchableOpacity>
          </Quadrado>
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
  ovo: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgb(255, 215, 0)',
  },
});