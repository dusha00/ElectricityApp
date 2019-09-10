
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/views/Home'
import CartScreen from './src/views/Cart'
import CategoryScreen from './src/views/Category'
import ItemDetailScreen from './src/views/ItemDetail'
import MineScreen from './src/views/Mine'
import TabBarItem from './src/common/TabBarItem'
import theme from './src/common/theme'

const routeOptMap: any = {
    Home: {
      headerTitle: '迷你水果商城',
      selectedImage: require('./src/img/homeSelect.png'),
      normalImage: require('./src/img/home.png'),
      tabBarLabel: '主页'
    },
    Category: {
      headerTitle: '分类',
      selectedImage: require('./src/img/categorySelect.png'),
      normalImage: require('./src/img/category.png'),
      tabBarLabel: '分类'
    },
    Cart: {
      headerTitle: '购物车',
      selectedImage: require('./src/img/cartSelect.png'),
      normalImage: require('./src/img/cart.png'),
      tabBarLabel: '购物车'
    },
    Mine: {
      headerTitle: '我的信息',
      selectedImage: require('./src/img/mineSelect.png'),
      normalImage: require('./src/img/mine.png'),
      tabBarLabel: '我的'
    },
    ItemDetail: {
      headerTitle: '商品信息'
    },
    CartScreen: {
      headerTitle: '购物车'
    }
  };
  
  // 默认header配置
  const defaultHeaderOpts = {
    headerTitleStyle: {
      flex: 1, // 解决安卓机title不居中
      textAlign: 'center', // 解决安卓机title不居中
      fontSize: 15,
      color: theme.fontColor
    },
    headerStyle: {
      height: 38,
      backgroundColor: theme.color
    }
  };
  
  const HeaderBackImage = () => (
    <Image
      style={{ marginLeft: 2, width: 25, height: 25 }}
      source={require('./src/img/arrow.png')}
    />
  );
  
  const TabNavigator = createBottomTabNavigator(
    {
      Home: HomeScreen,
      Category: CategoryScreen,
      Cart: CartScreen,
      Mine: MineScreen
    },
    {
      // tabBar配置统一在这里配置
      // 不需要到每个页面中进行配置了
      defaultNavigationOptions: ({ navigation }: any) => {
        const { routeName } = navigation.state;
        return {
          tabBarLabel: routeOptMap[routeName].tabBarLabel,
          /* eslint-disable-next-line */
          tabBarIcon: ({ focused, tintColor }: any) => (
            <TabBarItem
              tintColor={tintColor}
              focused={focused}
              selectedImage={routeOptMap[routeName].selectedImage}
              normalImage={routeOptMap[routeName].normalImage}
            />
          )
        };
      },
      tabBarOptions: {
        activeTintColor: theme.color,
        inactiveTintColor: '#979797',
        labelStyle: {
          fontSize: 12 // 文字大小
        }
      }
    }
  )
  
  // header相关配置需要在这里写
  TabNavigator.navigationOptions = ({ navigation }: any) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      ...defaultHeaderOpts,
      headerTitle: routeOptMap[routeName].headerTitle
    };
  };
  
  const AppNavigator = createStackNavigator(
    {
      Tab: TabNavigator,
      ItemDetailScreen,
    },
    {
      initialRouteName: 'Tab',
      mode: 'card',
      defaultNavigationOptions: ({ navigation }: any) => {
        const { routeName } = navigation.state;
        return {
          ...defaultHeaderOpts,
          gesturesEnabled: true,
          headerBackTitle: null,
          headerTitle: routeOptMap[routeName] && routeOptMap[routeName].headerTitle,
          headerBackImage: HeaderBackImage
        };
      },
    }
  );
  
  const AppContainer = createAppContainer(AppNavigator);
  
  
  export default AppContainer;