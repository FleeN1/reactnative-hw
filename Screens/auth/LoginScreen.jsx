import React, { useState } from 'react';
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';


const initialState = {
    email: '',
    password: '',
}

export default function LoginScreen({ navigation }) {
    const [state, setState] = useState(initialState)
    const [isPasswordSecure, setIsPasswordSecure] = useState(true)
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)

    const keyboardHidden = () => {
        setIsShowKeyboard(false)
        Keyboard.dismiss()
    }

    const submitLog = () => {
        setIsShowKeyboard(false)
        Keyboard.dismiss()
        setState(initialState)
    }


    return (
        <TouchableWithoutFeedback onPress={keyboardHidden}>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/image/photo-bg.jpg')} style={styles.image}>
                    <View style={{
                        ...Platform.select({
                            ios: {
                                ...styles.form,
                                marginBottom: isShowKeyboard ? 120 : 0,
                            },
                            android: {
                                ...styles.form,
                            },
                        }),
                    }}
                    >
                        <KeyboardAvoidingView
                            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        >
                            <Text style={styles.title}>Войти</Text>
                            <TextInput
                                value={state.email}
                                style={styles.input}
                                onFocus={() => {
                                    setIsShowKeyboard(true)
                                }}
                                placeholder='Адрес электронной почты'
                                onChangeText={(value) => {
                                    setState((prev) => ({ ...prev, email: value }))
                                }}
                            />
                            <View style={{ position: 'relative' }}>
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
                                <Text
                                    onPress={() => {
                                        setIsPasswordSecure(!isPasswordSecure)
                                    }}
                                    style={styles.showPassword}
                                >
                                    {isPasswordSecure ? 'Показать' : 'Скрыть'}
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.btn} onPress={submitLog}>
                                <Text style={styles.buttonText}>Войти</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                                <Text style={styles.login}>Нет аккаунта? Зарегистрироваться</Text>
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
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingBottom: 40,
        paddingTop: 32,

    },
    title: {
      
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: '#212121',
        marginBottom: 16,

    },
    input: {
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        backgroundColor: '#F6F6F6',

        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#212121',
    },
    btn: {
        borderRadius: 100,
        marginHorizontal: 16,
        marginTop: 43,
        paddingTop: 16,
        marginBottom: 16,
        paddingBottom: 16,
        backgroundColor: '#FF6C00',
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
    },
    showPassword: {
        position: 'absolute',
        top: 32,
        right: 32,
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
  },
    login: {
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
    },
});