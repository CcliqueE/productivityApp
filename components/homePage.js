import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Monoton_400Regular } from '@expo-google-fonts/monoton'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function HomePage() {

    let [fontsLoaded, error] = useFonts({
        Monoton_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
        
        <View style={styles.motives} >
            <View style={styles.header} >
                <Text style={styles.headerText} >Assignments</Text>
            </View>
        </View>
        <View style={styles.letters} >

        </View>
        {/* <Text>https://central.swoca.net/auth/login?signin=18e40287384ff23dd7bc70c3df30752f</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    letters: {
        backgroundColor: '#222222',
        position: 'absolute',
        left: 0,
        width: 60,
        height: '100%',
        borderRadius: 30
    },
    motives: {
        backgroundColor: '#111111',
        position: 'absolute',
        right: 0,
        width: '100%',
        height: '100%'
    },
    header: {
        position: 'absolute',
        width: '100%',
        top: 0,
        backgroundColor: '#393e6f',

    },
    headerText: {
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 60,
        fontSize: 40,
        fontFamily: 'Monoton_400Regular',
        textAlign: 'center',
        color: 'lightgray'
    }
});
