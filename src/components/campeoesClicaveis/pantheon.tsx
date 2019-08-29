import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity  } from 'react-native';

export interface AppProps {
    navigation: any;
}

export interface AppState {
}

export default class PantheonClicavel extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('pantheon')}>
                <Image source={require('./../../../assets/img/Champs/Todos/Pantheon_DragonslayerSquare.png')} style={styles.champImg}></Image>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    champImg: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgb(255, 215, 0)',
    },
});