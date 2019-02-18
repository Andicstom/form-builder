import React, { Component } from 'react';
import RenderForm from '../../components/RenderForm/RenderForm';

class Preview extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="card w-50 container">
                <RenderForm
                    formData={this.props.formData}
                    onSubmit={this.props.onSubmit}
                />
            </div>
        );
    }
}

export default Preview;
