import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class TestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const StackNavigator = createStackNavigator({
  Home: {
    screen: TestScreen
  }
});
const AppNavigator= createAppContainer(StackNavigator);
export default AppNavigator;