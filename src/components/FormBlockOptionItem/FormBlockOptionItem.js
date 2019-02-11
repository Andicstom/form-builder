import React, { Component } from "react";
import CrudBar from "../CrudBar/CrudBar";

class FormBlockOptionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.formBlockOptionItem.content
    };
  }

  changeFormBlockOptionContent = e => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <li>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <span className="glyphicon glyphicon-check" aria-hidden="true" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder={this.props.formBlockOptionItem.content}
            onChange={this.changeFormBlockOptionContent}
          />
          <CrudBar
            deleteOption={this.props.deleteOption}
            parentId={this.props.parentId}
            optionId={this.props.formBlockOptionItem.id}
          />
        </div>
      </li>
    );
  }
}

export default FormBlockOptionItem;
