import React, { Component } from 'react';

class SimpleInputContent extends Component {
    constructor(props) {
        super(props);

        this.state = { name: this.props.name };
    }

    getIconIfNeeded = () => {
        switch (this.props.type) {
            case 'text':
                return 'fas fa-font';
            case 'date':
                return 'far fa-calendar-alt';
            default:
                return 'd-none';
        }
    };

    getSpanIfNeeded = () => {
        return this.props.type === 'hideSpan' ? 'd-none' : 'input-group-text';
    };

    onSimpleInputChange = e => {
        this.props.onSimpleInputChange(e.target.value, this.props.workAs);
        this.setState({ name: e.target.value });
    };

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span
                        className={this.getSpanIfNeeded()}
                        id="inputGroup-sizing-default"
                    >
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                        >
                            <i className={this.getIconIfNeeded()} />
                        </span>
                    </span>
                </div>
                <input
                    type="text"
                    id="answer"
                    disabled={this.props.disabled}
                    placeholder={this.state.name}
                    className="form-control"
                    onChange={this.onSimpleInputChange}
                />
            </div>
        );
    }
}

export default SimpleInputContent;
