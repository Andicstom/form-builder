import React, { Component } from 'react';

class FormBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title
        };
    }

    onTitleChange = e => {
        this.props.onFormBlockNameChange(this.props.id, e.target.value);
        this.setState({ title: e.target.value });
    };

    render() {
        return (
            <li className="list-group-item p-0" >
                <div className="text-right">
                    {this.props.crudBar}
                </div>
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
                    {this.props.content}
                </div>
            </li>
        );
    }
}

export default FormBlock;
