import React, { useState } from 'react';
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View, Text, TextInput, TouchableOpacity } from 'react-native';

const initialState = {
    login: '',
    email: '',
    password: '',
}

export default function RegistrationScreen() {
    const [state, setState] = useState(initialState)
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)


    const keyboardHidden = () => {
        setIsShowKeyboard(false)
        Keyboard.dismiss()
    }

    const submitReg = () => {
        setIsShowKeyboard(false)
        Keyboard.dismiss()
        setState(initialState)
    }


    return (
        <TouchableWithoutFeedback onPress={keyboardHidden}>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/image/photo-bg.jpg')} style={styles.image}>
                <View style={{
                    ...Platform.select({
                        ios: {
                            ...styles.form,
                            marginBottom: isShowKeyboard ? 140 : 0,
                        },
                        android: {
                            ...styles.form,
                        },
                    }),
                }}
                >
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                            <Text style={styles.title}>Регистрация</Text>
                            <TextInput
                                value={state.login}
                                placeholder='Логин'
                                style={styles.input}
                                onFocus={() => {
                                    setIsShowKeyboard(true)
                                }}
                                onChangeText={(value) => {
                                    setState((prev) => ({ ...prev, login: value}))
                                }}
                            />
                            <TextInput
                                value={state.email}
                                placeholder='Адрес электронной почты'
                                style={styles.input}
                                onFocus={() => {
                                    setIsShowKeyboard(true)
                                }}
                                onChangeText={(value) => {
                                    setState((prev) => ({ ...prev, email: value}))
                                }}
                            />
                            <View>
                                <TextInput
                                    value={state.password}
                                    style={styles.input}
                                    placeholder='Пароль'
                                    onFocus={() => {
                                        setIsShowKeyboard(true)
                                    }}
                                    onChangeText={(value) => {
                                        setState((prev) => ({ ...prev, password: value }))
                                    }}
                                />
                            </View>
                            <TouchableOpacity style={styles.btn} onPress={submitReg}>
                                <Text style={styles.buttonText}>Зарегистрироваться</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.login}>Уже есть аккаунт? Войти</Text>
                            </TouchableOpacity>
                </KeyboardAvoidingView>
                </View>
            </ImageBackground>
            </View>
            </TouchableWithoutFeedback>
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
    },
    form: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingBottom: 92,
    },
    title: {
        fontFamily: 'Robot-Medium',
        marginBottom: 16,
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        color: '#212121',
        letterSpacing: 0.01,
    },
    input: {
        backgroundColor: '#F6F6F6',
        marginTop: 16,
        marginHorizontal: 16,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E8E8E8',
        fontFamily: 'Robot-Regular',

        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
    btn: {
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginBottom: 16,
        marginHorizontal: 16,
        marginTop: 43,
        paddingBottom: 16,
        paddingTop: 16,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
        fontFamily: 'Roboto-Regular',
    },
    login: {
        color: '#1B4371',
        lineHeight: 19,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    },
})