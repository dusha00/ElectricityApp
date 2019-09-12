import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import { IProps } from '../../interface/IProps';
import theme from '../../common/theme';
import { width } from '../../common/screen';


interface IHomeSwiperProps extends IProps {
    imageSources: Array<any>
}

export default class HomeSwiper extends Component<IHomeSwiperProps, any> {
    render() {
        return (<Swiper autoplay activeDotColor={theme.color} dotColor="#ffffff">
            {
               this.props.imageSources.map((v, i) => (
                    /* eslint-disable-next-line */
                    <View key={i} style={styles.imgWrap}>
                        <Image source={v} style={styles.img} />
                    </View>
                ))
            }
        </Swiper>)
    }
}
const styles = StyleSheet.create({
    imgWrap: {
      flex: 1
    },
    img: {
      width,
      height: 200,
      resizeMode: 'stretch'
    }
  });



