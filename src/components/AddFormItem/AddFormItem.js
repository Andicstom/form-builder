import React, { Component } from 'react';

class AddFormItem extends Component {
    render() {
        return (
            <div className="dropdown float-right">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Add New
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => {
                            this.props.addFormBlock('text');
                        }}
                    >
                        Text
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => {
                            this.props.addFormBlock('radio');
                        }}
                    >
                        Single choice
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => {
                            this.props.addFormBlock('checkbox');
                        }}
                    >
                        Multi choices
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => {
                            this.props.addFormBlock('dropdown');
                        }}
                    >
                        Dropdawn
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => {
                            this.props.addFormBlock('date');
                        }}
                    >
                        Date
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => {
                            this.props.addFormBlock('range');
                        }}
                    >
                        Range
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => {
                            this.props.addFormBlock('longText');
                        }}
                    >
                        Long text
                    </button>
                    <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => {
                            this.props.addFormBlock('dynamicInput');
                        }}
                    >
                        Dynamic input
                    </button>
                </div>
            </div>
        );
    }
}

export default AddFormItem;
