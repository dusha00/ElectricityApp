import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

import PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-easy-toast';
import theme from '../../common/theme';
import { width } from '../../common/screen';
import { IProps } from '../../interface/IProps';
import { CartStoreService } from '../../service/CartStoreService';
import { OrderStoreService } from '../../service/OrderStoreService';

interface ICartCheckOutProps extends IProps {
    cartStoreService: CartStoreService,
    orderStoreService: OrderStoreService
}

@inject('cartStoreService')
@inject('orderStoreService')
@observer
export default class CartCheckOut extends Component<ICartCheckOutProps, any> {
    state = {
        visible: false,
        loadText: '正在支付...'
    };

    toastRef = React.createRef<string>();

    // 全选
    allSelect = () => {
        // fixed https://github.com/shooterRao/react-native-fruitStore/issues/7
        const { isAllSelected } = this.props.cartStoreService;
        if (isAllSelected) {
            this.props.cartStoreService.foodList.forEach(e => {
                e.isSelected = false;
            });
        } else {
            this.props.cartStoreService.foodList.forEach(e => {
                e.isSelected = true;
            });
        }
    };

    // 付款
    pay = () => {
        Alert.alert(
            '您好',
            `总计:￥ ${this.props.cartStoreService.totalMoney}`,
            [
                { text: '确认支付', onPress: this.clear },
                { text: '下次再买', onPress: () => null }
            ],
            { cancelable: false }
        );
    };

    // 清空购物车
    clear = () => {
        // const { visible } = this.state;
        // const { navigation } = this.props;
        this.setState({
            visible: true
        });
        const payOut = () =>
            /* eslint-disable */
            new Promise(res => {
                setTimeout(() => {
                    this.setState({
                        loadText: '支付成功!欢迎下次光临!'
                    });
                    res();
                }, 2000);
            });
        const afterPayOut = async () => {
            await payOut();
            setTimeout(() => {
                this.setState({
                    visible: false
                });
                // 把数据加入到订单页面中
                const orderData:any = {};
                orderData.date = new Date();
                orderData.totalMoney = this.props.cartStoreService.totalMoney;
                orderData.data = [];
                this.props.cartStoreService.foodList.forEach(e => {
                    if (e.isSelected) {
                        orderData.data.push(e);
                    }
                });
                this.props.orderStoreService.allDatas.push(orderData);
                // 清空购物车
                this.props.cartStoreService.foodList = [];
                // navigation.navigate('Cart');
            }, 1500);
        };
        afterPayOut();
    };

    render() {
        const { visible, loadText } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.allSelect}>
                    <Image
                        source={
                            this.props.cartStoreService.isAllSelected
                                ? require('../../img/radio_selected.png')
                                : require('../../img/radio_normall.png')
                        }
                        style={styles.image}
                    />
                </TouchableOpacity>

                <View style={styles.right}>
                    <Text style={{ flex: 1, marginLeft: 5, fontSize: 16 }}>全选</Text>
                    <Text style={{ fontSize: 22, color: '#000' }}>
                        ￥ {this.props.cartStoreService.totalMoney}
                    </Text>
                </View>

                <TouchableOpacity
                    style={{ paddingLeft: 15, paddingRight: 15, alignItems: 'center' }}
                    onPress={this.pay}>
                    <Text style={{ fontSize: 16 }}>付款</Text>
                </TouchableOpacity>
                <Spinner
                    visible={visible}
                    textContent={loadText}
                    textStyle={{ fontSize: 15, color: '#FFF' }}
                />
                <Toast
                    ref={this.toastRef}
                    positionValue={200}
                    fadeInDuration={650}
                    fadeOutDuration={600}
                    opacity={0.8}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width,
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: theme.color
    },
    image: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

