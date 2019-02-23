import React, { Component } from 'react';

class RangePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            min: this.props.props.min || 0,
            max: this.props.props.max || 0
        };
    }

    onMinValueChange = e => {
        this.props.onMinNumberChange(this.props.id, e.target.value);
        this.setState({ min: e.target.value})
    };

    onMaxValueChange = e => {
        this.props.onMaxNumberChange(this.props.id, e.target.value);
        this.setState({ max: e.target.value})
    };

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="Min number">
                            min
                        </span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="Min number"
                        aria-describedby="Min number"
                        placeholder={this.state.min}
                        onChange={this.onMinValueChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="Max number">
                            max
                        </span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        aria-label="MaxMin number"
                        aria-describedby="Max number"
                        placeholder={this.state.max}
                        onChange={this.onMaxValueChange}
                    />
                </div>
            </div>
        );
    }
}

export default RangePicker;
