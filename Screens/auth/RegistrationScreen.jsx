import React, { useState } from 'react';
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';

const initialState = {
    login: '',
    email: '',
    password: '',
}

export default function RegistrationScreen({ navigation }) {
    const [state, setState] = useState(initialState)
    const [isShowKeyboard, setIsShowKeyboard] = useState(false)
    const [camera, setCamera] = useState()
    const [photo, setPhoto] = useState('');


    const keyboardHidden = () => {
        setIsShowKeyboard(false)
        Keyboard.dismiss()
    }

    const submitReg = () => {
        setIsShowKeyboard(false)
        Keyboard.dismiss()
        setState(initialState)
    }
    
    const takePhoto = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        const photo = await camera.takePictureAsync()
        setPhoto(photo.uri)
    }


    return (
        <TouchableWithoutFeedback onPress={keyboardHidden}>
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/image/photo-bg.jpg')} style={styles.image}>
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
                        <Camera style={styles.camera} ref={setCamera} type={CameraType.front}>
                            {photo && (
                                <>
                                    <View style={styles.takePhotoContainer}>
                                        <Image source={{uri: photo}} style={styles.photo} />
                                    </View>
                                </>
                            )}
                        </Camera>
                        {photo && (
                            <TouchableOpacity onPress={() => {
                                setPhoto('')
                            }}
                                style={
                                    {
                                        position: 'absolute',
                                        width: 24,
                                        height: 24,
                                        backgroundColor: '#ffffff',
                                        bottom: 510,
                                        right: 136,
                                        borderRadius: 50,
                                        borderColor: '#E8E8E8',
                                        borderWidth: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                }
                            }
                            >
                                <AntDesign name="close" size={20} color='#BDBDBD' />
                            </TouchableOpacity>
                        )}
                        {!photo && (
                            <TouchableOpacity style={{
                                position: 'absolute',
                                bottom: 510,
                                right: 136,
                            }}
                            onPress={takePhoto}
                            >
                                <AntDesign name='pluscircleo' size={25} color='#FF6C00' />
                            </TouchableOpacity>
                        )}
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
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
        backgroundColor: '#ffffff',
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
        fontFamily: 'Roboto-Medium',
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
        fontFamily: 'Roboto-Regular',

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
    camera: {
        position: 'absolute',
        top: -60,
        width: 120,
        height: 120,
        left: '35%',
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#F6F6F6',
    },
    photo: {
        height: 120,
        width: 120,
        borderRadius: 16,
    },
    takePhotoContainer: {
        position: 'absolute',
    }
})