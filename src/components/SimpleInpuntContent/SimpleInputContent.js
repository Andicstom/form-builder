import React, { Component } from 'react';

class SimpleInputContent extends Component {
    constructor(props) {
        super(props);

        this.state = { name: this.props.name, inputType: this.props.type };
    }

    getIconIfNeeded = () => {
        switch (this.state.inputType) {
            case 'text':
                return 'fas fa-font';
            case 'date':
                return 'far fa-calendar-alt';
            case 'number':
                return '';
            case 'email':
                return 'far fa-envelope';
            case 'tel':
                return 'fas fa-mobile-alt';
            case 'password':
                return 'fas fa-unlock-alt';
            case 'color':
                return 'fas fa-fill';
            case 'time':
                return 'far fa-clock';
            default:
                return 'fas fa-cog';
        }
    };

    getSpanIfNeeded = () => {
        return this.state.inputType === 'hideSpan' ? 'd-none' : 'input-group-text';
    };

    onSimpleInputChange = e => {
        this.props.onSimpleInputChange(e.target.value, this.props.workAs);
        this.setState({ name: e.target.value });
    };

    onSelectChange = e => {
        const type = e.target.value;
        this.setState({ inputType: type });
        this.props.changeDynamicInputType(this.props.id, type);
    };

    render() {
        const type = this.props.type;
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
                <div
                    className={
                        type === 'dynamicInput' ||
                        type === 'password' ||
                        type === 'email' ||
                        type === 'number' ||
                        type === 'tel' ||
                        type === 'color' ||
                        type === 'time'
                            ? 'input-group mb-3'
                            : 'd-none'
                    }
                >
                    <div className="input-group-prepend">
                        <label
                            className="input-group-text"
                            htmlFor="inputGroupSelect01"
                        >
                            Input types
                        </label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputTypeSelect"
                        onChange={this.onSelectChange}
                    >
                        <option defaultValue>Choose...</option>
                        <option value="email">Email</option>
                        <option value="password">Password</option>
                        <option value="tel">Telelphon</option>
                        <option value="time">Time</option>
                        <option value="color">Color</option>
                        <option value="number">Number</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default SimpleInputContent;
