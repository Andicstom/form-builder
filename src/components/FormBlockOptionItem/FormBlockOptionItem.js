import React, { Component } from "react";
import CrudBar from "../CrudBar/CrudBar";

class FormBlockOptionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.index + ". " + this.props.formBlockOptionItem.content
    };
  }

  changeFormBlockOptionContent = e => {
    this.setState({ content: e.target.value });
  };

  getInputTypeImage = () => {
    if (this.props.type === "multi") {
      return "far fa-dot-circle";
    } else if (this.props.type === "single") {
      return "far fa-check-square";
    } else if (this.props.type === "dropdown") {
      return "fas fa-chevron-circle-down";
    } else {
      return "fas fa-angle-right";
    }
  };

  render() {
    return (
      <li>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <i className={this.getInputTypeImage()} />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder={this.state.content}
            onChange={this.changeFormBlockOptionContent}
          />
          <CrudBar
            deleteOption={this.props.deleteOption}
            parentId={this.props.parentId}
            optionId={this.props.formBlockOptionItem.id}
            moveOptionUp={this.props.moveOptionUp}
            moveOptionDown={this.props.moveOptionDown}
            index={this.props.index}
            optionsSize={this.props.optionsSize}
          />
        </div>
      </li>
    );
  }
}

export default FormBlockOptionItem;
