import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Vibration, Image } from 'react-native';

export interface AppProps {
}

export interface AppState {
}

export default class PatchScreen extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (<ImageBackground source={require('./../../assets/img/backgroundInicio.jpg')}
            style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Patch Notes</Text>
                <View style={styles.quadrado}>
                    <Text style={styles.semiTitulo}>9.16b</Text>
                    <Text style={styles.tema}>Campeões</Text>
                    <Image source={require('./../../assets/img/Champs/Todos/Draven_GladiatorSquare.png')} style={styles.champImg}></Image>
                    <Text style={styles.champText}>Draven:</Text>
                    <Text style={styles.info}>Vida: 700 -> 600</Text>
                    <Text style={styles.info}>Dano de Ataque: 75 -> 70</Text>
                    <Image source={require('./../../assets/img/Champs/Todos/JinxSquare.png')} style={styles.champImg}></Image>
                    <Text style={styles.champText}>Jinx:</Text>
                    <Text style={styles.info}>Velocidade de Ataque adicional da Habilidade: 0,75/1,0/1,25 -> 0,6/0,8/1,0</Text>
                    <Text style={styles.info}>Dano do míssil: 100/225/350 -> 100/200/300</Text>
                    <Image source={require('./../../assets/img/Champs/Todos/KayleSquare.png')} style={styles.champImg}></Image>
                    <Text style={styles.champText}>Kayle:</Text>
                    <Text style={styles.info}>Duração do escudo: 2/3/4 -> 2/2,5/3</Text>
                    <Image source={require('./../../assets/img/Champs/Todos/LucianSquare.png')} style={styles.champImg}></Image>
                    <Text style={styles.champText}>Lucian:</Text>
                    <Text style={styles.info}>Dano da Habilidade: 150/250/350 -> 100/225/350</Text>
                    <Text style={styles.tema}>Itens</Text>
                    <Image source={require('./../../assets/img/Itens/Completo/Ludens_Echo_item.png')} style={styles.champImg}></Image>
                    <Text style={styles.champText}>Eco de Luden:</Text>
                    <Text style={styles.info}>Dano: 200 -> 180</Text>
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
    titulo: {
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
    champImg: {
        width: 40,
        height: 40,
        marginTop: 10,
        borderRadius: 5,
    },
    champText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        width: '100%',
    },
    semiTitulo: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        width: '100%',
        marginBottom: -15,
    },
    tema: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
        marginTop: 15,
        marginBottom: -10,
    },
    info: {
        color: 'white',
        fontSize: 14,
        width: '100%',
    }
});