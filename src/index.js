import { React } from "react";
import { h, render } from "preact";
import { Provider } from "react-redux";
import { store } from "./core";
import { WalletAddress } from "./components";

if (process.env.NODE_ENV === "development") {
  require("preact/devtools");
}

const cfgDefaults = {
  containerId: "chainplate-root"
};

const dataDefaults = {
  walletETH: ""
};

const App = () =>
  <WalletAddress />;

const Container = () =>
  <Provider store={store}>
    <App />
  </Provider>;

const renderApp = (el, merge) =>
  render( <Container />, el, merge);

const Chainplate = {

  init: (cfg, data) => {
    console.log("chainplate-sdk-version", process.env.SDK_VERSION); // eslint-disable-line no-console

    const options = { ...cfgDefaults, ...cfg };
    const model = !data ? dataDefaults : data;

    const containerElement = document.getElementById(cfg.containerId);
    const element = renderApp(containerElement);

    return {
      element,
      options,
      model
    };
  }

};

export default Chainplate;