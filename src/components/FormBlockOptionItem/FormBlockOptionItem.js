import React, { Component } from 'react';

class FormBlockOptionItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: this.props.option.content
        };
    }

    changeFormBlockOptionContent = e => {
        this.props.onFormOptionNameChange(this.props.option.id, e.target.value);
        this.setState({ content: e.target.value });
    };

    getInputTypeImage = () => {
        if (this.props.type === 'radio') {
            return 'far fa-dot-circle';
        } else if (this.props.type === 'checkbox') {
            return 'far fa-check-square';
        } else {
            return 'fas fa-angle-right';
        }
    };

    render() {
        return (
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span
                        className="input-group-text"
                        id="inputGroup-sizing-sm"
                    >
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
                <div className="float-right">{this.props.crudBar}</div>
            </div>
        );
    }
}

export default FormBlockOptionItem;
