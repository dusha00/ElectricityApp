import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewGoodsItem from './NewGoodsItem';
import { width } from '../../common/screen';
import { IProps } from '../../interface/IProps';

interface INewGoodsViewProps extends IProps {
    itemDatas: Array<any>
}

const NewGoodsView = ({ itemDatas, navigation }: INewGoodsViewProps) => (
    <View style={styles.container}>
        {itemDatas.map((value, index) => (
            <NewGoodsItem
                onPress={() => navigation && navigation.navigate('ItemDetailScreen', { value })}
                name={value.name}
                price={value.price}
                image={value.image}
                /* eslint-disable-next-line */
                key={`list-${index}`}
            />
        ))}
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        width: (width - 40) / 2,
        height: 150,
        flexDirection: 'column',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 10,
        alignItems: 'center',
        backgroundColor: '#f5f6f5',
        borderRadius: 20
    },
    image: {
        width: 100,
        height: 100
    }
});

export default NewGoodsView;
