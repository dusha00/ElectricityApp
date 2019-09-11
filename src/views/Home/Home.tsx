import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import { observer, inject } from "mobx-react";
import { IProps } from '../../interface/IProps';
import { HomeService } from '../../service/HomeService'

interface IHomeProps extends IProps {
    homeService: HomeService
}

@inject('homeService')
@observer
export default class HomeScreen extends Component<IHomeProps, any> {
    constructor(props: IHomeProps) {
        super(props);
    }
    
    render() {
        return (
            <View>
                
            </View>
        )
    }
}
