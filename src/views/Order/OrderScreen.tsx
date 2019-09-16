import React, { Component } from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';
import OrderList from './OrderList';
import { IProps } from '../../interface/IProps';
import { OrderStoreService } from '../../service/OrderStoreService';

interface IOrderProps extends IProps {
    orderStoreService: OrderStoreService
}

@inject('orderStoreService')
@observer
export default class OrderScreen extends Component<IOrderProps, any> {
    // 解决安卓机标题偏右问题
    static navigationOptions = {
        headerRight: <View />
    };

    @computed get OrderData() {
        return this.props.orderStoreService.allDatas;
    }

    renderItem = ({ item }: any) => <OrderList item={item} />;

    keyExtractor = (item: any, index: any) => `item-${index}`;

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.OrderData.length ? (
                    <FlatList
                        data={this.OrderData}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                    />
                ) : (
                        <View
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>订单空空如也~</Text>
                        </View>
                    )}
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
