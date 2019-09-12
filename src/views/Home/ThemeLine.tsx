import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../common/theme';
import { IProps } from '../../interface/IProps';

interface IThemeLineProps extends IProps {
    name: string,
    textStyle?: object | string,
    lineStyle?: object | string
}

const ThemeLine = ({ name, textStyle, lineStyle }: IThemeLineProps) => (
    <View style={[styles.lineStyle, styles.lineStyle]}>
        <Text style={[styles.textStyle, styles.textStyle]}>{name}</Text>
    </View>
);


const styles = StyleSheet.create({
    lineStyle: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: theme.color
    }
});
export default ThemeLine;