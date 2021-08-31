import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Monoton_400Regular } from '@expo-google-fonts/monoton'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Icon from 'react-native-vector-icons/FontAwesome'

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
            <View>
                <View style={styles.assignments}>

                </View>
            </View>
            <View style={styles.addItem} >
                <Icon name='plus' style={styles.addItemSym} />
            </View>
        </View>
        <View style={styles.letters} >
            <View style={styles.lettersTextView} >
                <Text style={styles.lettersText} >A</Text>
                <Text style={styles.lettersText} >A</Text>
                <Text style={styles.lettersText} >A</Text>
                <Text style={styles.lettersText} >A</Text>
            </View>
            <Icon name='chevron-right' style={styles.arrowRight} ></Icon>
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
    lettersTextView: {
        position: 'absolute',
        top: 30,
        left: 20
    },
    lettersText: {
        color: 'white',
        fontSize: 30,
        marginBottom: 30
    },
    arrowRight: {
        position: 'absolute',
        top: '50%',
        left: 70,
        fontSize: 20,
        color: 'white',
        opacity: 0.5
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
        height: 110,
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
    },
    assignments: {
        position: 'absolute',
        top: 110,
        backgroundColor: 'gray',
        height: 60,
        width: '100%'
    },
    addItem: {
        position: 'absolute',
        backgroundColor: 'green',
        borderRadius: 50,
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        justifyContent: 'center'
    },
    addItemSym: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    }
});
