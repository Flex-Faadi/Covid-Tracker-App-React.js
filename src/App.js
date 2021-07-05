import "bootstrap/dist/css/bootstrap.min.css";
import Application from "./Layout/Application";
import "./Component/application.css";
import React from "react";
import store from "./Store";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Provider store ={store}>
        <Application />
      </Provider>
    </div>
  );
}

export default App;
