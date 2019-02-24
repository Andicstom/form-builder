import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);

        this.state = { content: this.props.content || '' };
    }

    onChange = e => {
        this.setState({ content: e.target.value });
    };

    render() {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        {this.props.name || 'Long text'}
                    </span>
                </div>
                <textarea
                    className="form-control"
                    aria-label="With textarea"
                    disabled={this.props.disabled}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default TextArea;
