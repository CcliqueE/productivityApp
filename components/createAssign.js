import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class CreateAssign extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <View style={[styles.background, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>

                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '100%',
        height: '100%'
    },
});


