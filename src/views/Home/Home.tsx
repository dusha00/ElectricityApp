import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { observer, inject } from "mobx-react";
import { IProps } from '../../interface/IProps';
import { HomeService } from '../../service/HomeService'
import HomeSwiper from './HomeSwiper';
import { width } from '../../common/screen';

interface IHomeProps extends IProps {
    homeService: HomeService
}

// 轮播图片
const imageSources = [
    require('../../img/i1.png'),
    require('../../img/i2.png'),
    require('../../img/i3.png')
];

@inject('homeService')
@observer
export default class HomeScreen extends Component<IHomeProps, any> {
    constructor(props: IHomeProps) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.swiper}>
                    <HomeSwiper imageSources={imageSources} />
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff'
    },
    swiper: {
      width,
      height: 200
    },
    image: {
      width,
      height: 200,
      resizeMode: 'stretch'
    },
    line: {
      flex: 1,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
