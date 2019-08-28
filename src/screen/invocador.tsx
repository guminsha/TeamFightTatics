import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Quadrado from './../components/quadrado'

export interface AppProps {
}

export interface AppState {
    invocador: string;
}

export default class InvocadorScreen extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            invocador: '',
        }
    }

    public buscarInvocador() {
        console.log('"Nome do invocador, Level, EloTFT"');
        console.log(this.state.invocador)
    }

    public render() {
        return (<ImageBackground source={require('./../../assets/img/backgroundInicio.jpg')}
            style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Buscar Invocador</Text>
                <Quadrado>
                    <Input placeholder='Digite seu nome de invocador'
                        leftIcon={{ name: 'person', color: 'white' }}
                        inputContainerStyle={styles.containerInput}
                        inputStyle={{ color: 'white' }}
                        onChangeText={invocador => this.setState({ invocador })}
                    />
                </Quadrado>
                <View style={{ alignItems: 'center' }}>
                    <Button title="Buscar" onPress={() => this.buscarInvocador()} buttonStyle={{ borderRadius: 20, width: 150, marginTop: 20 }} />
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
        fontSize: 32,
        textAlign: 'center',
    },
    containerInput: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 20,
        padding: 5,
        marginBottom: 5,
    },
    info: {
        color: 'white',
        fontSize: 18,
        width: '100%',
    }
});
