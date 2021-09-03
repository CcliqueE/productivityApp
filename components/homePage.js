import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import * as Font from 'expo-font'
import Icon from 'react-native-vector-icons/FontAwesome'

let customFonts = {
    'patchwork': require('../assets/fonts/Patchwork-Stitchlings.ttf')
}

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dropDownAnim: 60,
            opacityVal: 1
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts)
        this.setState({ fontsLoaded: true })
    }

    componentDidMount() {
        this._loadFontsAsync()
    }

    toggleAnim = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        this.setState({
            dropDownAnim: this.state.dropDownAnim === 60 ? 150 : 60,
            opacityVal: this.state.opacityVal === 1 ? 0 : 1
        })
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.motives} >
                    <View style={styles.header} >
                        <Text style={styles.headerText} >assignments</Text>
                    </View>
                    <View>
                        <TouchableWithoutFeedback onPress={this.toggleAnim} >
                        <View style={[styles.assignments, this.state.toggleAnim === 60 ? {height: this.state.dropDownAnim}
                        : {height: this.state.dropDownAnim}]}>
                            <Text style={styles.assignText} >Title</Text>
                            <Icon name='angle-down' style={[styles.downArrow, this.state.toggleAnim === 60 ? {opacity: this.state.opacityVal}
                             : {opacity: this.state.opacityVal}]} ></Icon>
                        </View>
                        </TouchableWithoutFeedback>
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
        )
    }
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
        marginTop: 50,
        marginBottom: 10,
        marginLeft: 60,
        fontSize: 20,
        fontFamily: 'patchwork',
        textAlign: 'center',
        color: 'lightgray'
    },
    assignments: {
        position: 'absolute',
        top: 110,
        backgroundColor: 'gray',
        width: '100%'
    },
    assignText: {
        color: 'white',
        fontSize: 37,
        marginLeft: 70,
        marginTop: 10
    },
    downArrow: {
        position: 'absolute',
        top: 15,
        right: 30,
        color: 'white',
        fontSize: 30,
        opacity: 1
    },
    assignAnim: {
        height: 150
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
