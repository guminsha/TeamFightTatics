import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Vibration, Image, ScrollView } from 'react-native';
import Quadrado from '../../components/quadrado'

export interface AppProps {
}

export interface AppState {
}

export default class RanzinzimScreen extends React.Component<AppProps, AppState> {
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
          <Text style={styles.logo}>Ranzinzim</Text>
          <Quadrado>
            <Text style={styles.rara}>Rara</Text>
            <Text style={styles.origem}>Lava (Original)</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Molten_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Molten_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Molten_Tier_3.png')} style={styles.lenda}></Image>
            <Text style={styles.origem}>Coração de Leão</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Lionheart_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Lionheart_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Lionheart_Tier_3.png')} style={styles.lenda}></Image>
            <Text style={styles.origem}>Tundra</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Tundra_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Tundra_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Tundra_Tier_3.png')} style={styles.lenda}></Image>
          </Quadrado>
          <Quadrado>
            <Text style={styles.epica}>Épica</Text>
            <Text style={styles.origem}>Vastinata</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Void-marked_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Void-marked_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Void-marked_Tier_3.png')} style={styles.lenda}></Image>
            <Text style={styles.origem}>Silvestre</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Willowbark_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Willowbark_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Willowbark_Tier_3.png')} style={styles.lenda}></Image>
          </Quadrado>
          <Quadrado>
            <Text style={styles.lendaria}>Lendária</Text>
            <Text style={styles.origem}>Sorvetinho</Text>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Sugarcone_Tier_1.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Sugarcone_Tier_2.png')} style={styles.lenda}></Image>
            <Image source={require('./../../../assets/img/Lendas/Todas/Ranzinzim/Furyhorn_Sugarcone_Tier_3.png')} style={styles.lenda}></Image>
          </Quadrado>
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