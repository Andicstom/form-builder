import React, { Component } from "react";
import FormBlockOptionItem from "../FormBlockOptionItem/FormBlockOptionItem";
import AddFormBlockOptionItem from "../AddFormBlockOptionItem/AddFormBlockOptionItem";

const containerStyle = {
  width: "60rem"
};

class FormBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.formBlock.id,
      type: this.props.formBlock.type,
      title: this.props.formBlock.title,
      content: this.props.formBlock.content
    };
  }

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    switch (this.state.type) {
      case "text":
        return (
          <div className="card container" style={containerStyle}>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Question
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  id="title"
                  placeholder={this.state.title}
                  onChange={this.onTitleChange}
                />
              </div>
              <br />
              <input
                type="text"
                id="answer"
                disabled
                placeholder=""
                className="form-control"
                value="answer"
              />
            </div>
          </div>
        );
      case "single":
        return (
          <div className="card container" style={containerStyle}>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Question
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  id="title"
                  placeholder={this.state.title}
                  onChange={this.onTitleChange}
                />
              </div>
              <br />
              <ul>
                {this.props.formBlock.content.formBlockOptionItems.map(
                  (formBlockOptionItem, index) => (
                    <FormBlockOptionItem
                      key={formBlockOptionItem.id}
                      formBlockOptionItem={formBlockOptionItem}
                      deleteOption={this.props.deleteOption}
                      parentId={this.props.formBlock.id}
                      moveOptionUp={this.props.moveOptionUp}
                      moveOptionDown={this.props.moveOptionDown}
                      index={index}
                      optionsSize={
                        this.props.formBlock.content.formBlockOptionItems.length
                      }
                      type={this.props.formBlock.content.optionType}
                    />
                  )
                )}
              </ul>
              <AddFormBlockOptionItem
                addFormBlockOption={this.props.addFormBlockOption}
                parentId={this.props.formBlock.id}
              />
            </div>
          </div>
        );
      case "multi":
        return (
          <div className="card container" style={containerStyle}>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Question
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  id="title"
                  placeholder={this.state.title}
                  onChange={this.onTitleChange}
                />
              </div>
              <br />
              <ul>
                {this.props.formBlock.content.formBlockOptionItems.map(
                  (formBlockOptionItem, index) => (
                    <FormBlockOptionItem
                      key={formBlockOptionItem.id}
                      formBlockOptionItem={formBlockOptionItem}
                      deleteOption={this.props.deleteOption}
                      parentId={this.props.formBlock.id}
                      moveOptionUp={this.props.moveOptionUp}
                      moveOptionDown={this.props.moveOptionDown}
                      index={index}
                      optionsSize={
                        this.props.formBlock.content.formBlockOptionItems.length
                      }
                      type={this.props.formBlock.content.optionType}
                    />
                  )
                )}
              </ul>
              <AddFormBlockOptionItem
                addFormBlockOption={this.props.addFormBlockOption}
                parentId={this.props.formBlock.id}
              />
            </div>
          </div>
        );
      default:
        return <div>Sorry, we cant render your form-block!</div>;
    }
  }
}

export default FormBlock;
