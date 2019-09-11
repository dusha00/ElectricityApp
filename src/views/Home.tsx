import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import { observer, inject } from "mobx-react";
import { IProps } from '../interface/IProps';
import { HomeService } from '../service/HomeService'

interface IHomeProps extends IProps {
    homeService: HomeService
}

@inject('homeService')
@observer
export default class HomeScreen extends Component<IHomeProps, any> {
    constructor(props: IHomeProps) {
        super(props);
    }
    rnCallNative(){
        NativeModules.commModule.rnCallNativeWithPromise("hello native").then(
            (result:string)=>{
                console.log(result);
            }
        );
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ItemDetailScreen') }}>
                    <Text>{this.props.homeService.num}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.homeService.plus}><Text>{'Add'}</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.rnCallNative()}><Text>{'React native Call Native'}</Text></TouchableOpacity>
            </View>
        )
    }
}
