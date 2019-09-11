import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    NativeModules
} from 'react-native';

export default class AndroidNative extends Component {
    rnCallNative() {
        NativeModules.commModule.rnCallNativeWithPromise("hello native").then(
            (result: string) => {
                console.log(result);
            }
        );
    }
    render() {
        return (<View>
            <TouchableOpacity onPress={() => this.rnCallNative()}><Text>{'React native Call Native'}</Text></TouchableOpacity>
        </View>)
    }
}