import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const initialState = {
    login: '',
    email: '',
    password: '',
}

export default function RegistrationScreen() {
    const [state, setState] = useState(initialState)


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/image/photo-bg.jpg')} style={styles.image}>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    }
})