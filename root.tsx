import React from "react";
import { Provider } from "mobx-react";
import AppContainer from "./navigation";
import service from "./src/service/Service";
import codePush from "react-native-code-push"

export default function setup() {
  class Root extends React.Component {
    componentDidMount(){
      codePush.sync({
        updateDialog: {
          appendReleaseDescription: true,
          descriptionPrefix: '\n\n更新内容：\n',
          title: '更新',
          mandatoryUpdateMessage: '',
          mandatoryContinueButtonLabel: '更新',
        },
        mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
        deploymentKey: ''
      }); 
    }
    render() {
      return (
        <Provider {...service}>
          <AppContainer />
        </Provider>
      );
    }
  }
  return Root;
}