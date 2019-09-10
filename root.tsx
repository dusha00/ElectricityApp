import React from "react";
import { Provider } from "mobx-react";
import AppContainer from "./navigation";
import service from "./src/service/Service";

export default function setup() {
  class Root extends React.Component {
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