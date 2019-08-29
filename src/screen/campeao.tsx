import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import Quadrado from '../components/quadrado';
import PantheonClicavel from './../components/campeoesClicaveis/pantheon'

export interface AppProps {
    navigation: any;
}

export interface AppState {
}

export default class CampeaoScreen extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (<ImageBackground source={require('./../../assets/img/backgroundInicio.jpg')}
            style={styles.background}>
            <ScrollView>
                <View>
                    <Text style={styles.logo}>Campeões</Text>
                    <Quadrado>
                        <Text style={styles.custo}>1 de Ouro</Text>
                    </Quadrado>
                    <Quadrado>
                        <Text style={styles.custo}>2 de Ouro</Text>
                    </Quadrado>
                    <Quadrado>
                        <Text style={styles.custo}>3 de Ouro</Text>
                    </Quadrado>
                    <Quadrado>
                        <Text style={styles.custo}>4 de Ouro</Text>
                    </Quadrado>
                    <Quadrado>
                        <Text style={styles.custo}>5 de Ouro</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('pantheon')}>
                            <Image source={require('./../../assets/img/Champs/Todos/Pantheon_DragonslayerSquare.png')} style={styles.champImg}></Image>
                        </TouchableOpacity>
                    </Quadrado>
                </View>
            </ScrollView>
        </ImageBackground>
        );
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
    custo: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        width: '100%',
    },
    champImg: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgb(255, 215, 0)',
    },
});
