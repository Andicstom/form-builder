import React, { Component } from "react";
import Header from "./components/Header/Header";
import AddFormItem from "./components/AddFormItem/AddFormItem";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddFormItem />
      </div>
    );
  }
}

export default App;
