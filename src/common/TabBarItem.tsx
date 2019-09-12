import React from 'react';
import propTypes from 'prop-types';
import { Image } from 'react-native';
import { IProps } from '../interface/IProps';

interface ITabBarItemProps extends IProps{
  focused: Boolean
  tintColor: string,
  selectedImage: number,
  normalImage: number
}

const TabBarItem = ({ focused, tintColor, selectedImage, normalImage }:ITabBarItemProps) => (
  <Image
    source={focused ? selectedImage : normalImage}
    style={{ tintColor, width: 25, height: 25, alignItems: 'center' }}
  />
);

export default TabBarItem;
