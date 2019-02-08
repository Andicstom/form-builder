import React, { Component } from "react";
import Header from "./components/Header/Header";
import AddFormItem from "./components/AddFormItem/AddFormItem";
import FormBlockContainer from "./components/FormBlockContainer/FormBlockContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formBlocks: [
        {
          id: new Date(),
          type: "text",
          title: "Questin 1",
          content: []
        }
      ]
    };
  }

  addFormBlock = type => {
    const newFormBlock = {
      id: new Date(),
      type,
      title: "Questin " + this.getFormBlocksSize(),
      content: []
    };
    this.setState({ formBlocks: [...this.state.formBlocks, newFormBlock] });
  };

  getFormBlocksSize = () => {
    return this.state.formBlocks.length + 1;
  };

  render() {
    return (
      <div>
        <Header />
        <br />
        <div className="container">
          <FormBlockContainer formBlocks={this.state.formBlocks} />
          <AddFormItem addFormBlock={this.addFormBlock} />
        </div>
      </div>
    );
  }
}

export default App;
