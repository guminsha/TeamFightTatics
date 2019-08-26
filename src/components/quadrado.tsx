import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface AppProps {
}

export interface AppState {
}

export default class QuadradoView extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <View style={styles.quadrado}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    quadrado: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

