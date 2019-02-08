import React, { Component } from "react";
import FormBlock from "../FormBlock/FormBlock";

class FormBlockContainer extends Component {
  render() {
    return this.props.formBlocks.map(formBlock => (
      <FormBlock key={formBlock.id} formBlock={formBlock} />
    ));
  }
}

export default FormBlockContainer;
