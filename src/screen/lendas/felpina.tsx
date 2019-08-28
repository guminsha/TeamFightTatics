import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Vibration, Image, ScrollView } from 'react-native';
import Quadrado from '../../components/quadrado'

export interface AppProps {
}

export interface AppState {
}

export default class FelpinaScreen extends React.Component<AppProps, AppState> {
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
                    <Text style={styles.logo}>Felpina</Text>
                    <Quadrado>
                        <Text style={styles.rara}>Rara</Text>
                        <Text style={styles.origem}>Minguante (Original)</Text>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Moontipped_Tier_1.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Moontipped_Tier_2.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Moontipped_Tier_3.png')} style={styles.lenda}></Image>
                        <Text style={styles.origem}>Feérica</Text>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Fae_Tier_1.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Fae_Tier_2.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Fae_Tier_3.png')} style={styles.lenda}></Image>
                        <Text style={styles.origem}>Tutti-Frutti</Text>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Mistberry_Tier_1.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Mistberry_Tier_2.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Mistberry_Tier_3.png')} style={styles.lenda}></Image>
                    </Quadrado>
                    <Quadrado>
                        <Text style={styles.epica}>Épica</Text>
                        <Text style={styles.origem}>Borboleta</Text>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Monarch_Tier_1.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Monarch_Tier_1.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Monarch_Tier_1.png')} style={styles.lenda}></Image>
                        <Text style={styles.origem}>Indomada</Text>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Untamed_Tier_1.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Untamed_Tier_2.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Untamed_Tier_3.png')} style={styles.lenda}></Image>
                    </Quadrado>
                    <Quadrado>
                        <Text style={styles.lendaria}>Lendária</Text>
                        <Text style={styles.origem}>Eterna</Text>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Eternal_Tier_1.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Eternal_Tier_2.png')} style={styles.lenda}></Image>
                        <Image source={require('./../../../assets/img/Lendas/Todas/Felpina/Hushtail_Eternal_Tier_3.png')} style={styles.lenda}></Image>
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