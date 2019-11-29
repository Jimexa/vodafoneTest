import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import MainApp from "./components/mainApp/MainApp";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
        <header>
          <Example />
        </header>
      </div> */}
      <MainApp />
    </Provider>
  );
}

export default App;
