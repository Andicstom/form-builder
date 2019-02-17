import React, { Component } from "react";
import Header from "./components/Header/Header";
import AddFormItem from "./components/AddFormItem/AddFormItem";
import FormBlockContainer from "./components/FormBlockContainer/FormBlockContainer";
import _ from "lodash";
import uuid from "uuid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formBlocks: [
        {
          id: uuid.v4(),
          type: "text",
          title: "Questin 1",
          content: {
            formBlockOptionItems: []
          }
        }
      ]
    };
  }

  addFormBlock = type => {
    const newFormBlock = {
      id: uuid.v4(),
      type,
      title: "Questin " + this.getFormBlocksSize(),
      content: {
        formBlockOptionItems: []
      }
    };
    this.setState({ formBlocks: [...this.state.formBlocks, newFormBlock] });
  };

  addFormBlockOption = formBlockId => {
    const formBlocks = _.cloneDeep(this.state.formBlocks);

    const newFormBlockOption = {
      id: uuid.v4(),
      content: "option"
    };

    for (let formBlock of formBlocks) {
      if (formBlock.id === formBlockId) {
        formBlock.content.formBlockOptionItems = [
          ...formBlock.content.formBlockOptionItems,
          newFormBlockOption
        ];
        break;
      }
    }

    this.setState({ formBlocks });
  };

  deleteOption = (parentId, optionId) => {
    const formBlocks = _.cloneDeep(this.state.formBlocks);

    for (let formBlock of formBlocks) {
      if (formBlock.id === parentId) {
        let options = formBlock.content.formBlockOptionItems.filter(
          (option, index) => option.id !== optionId
        );
        formBlock.content.formBlockOptionItems = options;
        break;
      }
    }
    this.setState({ formBlocks });
  };

  moveOptionUp = (parentId, optionIndex) => {
    const formBlocks = _.cloneDeep(this.state.formBlocks);

    for (let formBlock of formBlocks) {
      if (formBlock.id === parentId) {
        let options = formBlock.content.formBlockOptionItems;

        let temp = options[optionIndex -1];
        options[optionIndex - 1] = options[optionIndex];
        options[optionIndex] = temp;
        formBlock.content.formBlockOptionItems = options;
        break;
      }
    }
    this.setState({ formBlocks });
  };

  moveOptionDown = (parentId, optionIndex) => {
    const formBlocks = _.cloneDeep(this.state.formBlocks);

    for (let formBlock of formBlocks) {
      if (formBlock.id === parentId) {
        let options = formBlock.content.formBlockOptionItems;

        let temp = options[optionIndex + 1];
        options[optionIndex + 1] = options[optionIndex];
        options[optionIndex] = temp;
        formBlock.content.formBlockOptionItems = options;
        break;
      }
    }
    this.setState({ formBlocks });
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
          <FormBlockContainer
            formBlocks={this.state.formBlocks}
            addFormBlockOption={this.addFormBlockOption}
            deleteOption={this.deleteOption}
            moveOptionUp={this.moveOptionUp}
            moveOptionDown={this.moveOptionDown}
          />
          <AddFormItem addFormBlock={this.addFormBlock} />
        </div>
      </div>
    );
  }
}

export default App;
