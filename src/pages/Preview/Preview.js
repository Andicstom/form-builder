import React, { Component } from 'react';
import RenderForm from '../../components/RenderForm/RenderForm';
import SimpleLinkButton from '../../components/SimpleLinkButton/SimpleLinkButton';

class Preview extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="container w-50">
                <div className="card">
                    <RenderForm
                        formData={this.props.formData}
                        onSubmit={this.props.onSubmit}
                        title={this.props.title}
                        description={this.props.description}
                    />
                </div>
                <SimpleLinkButton
                    title="Show builder"
                    className="btn btn-success float-left"
                    toLink="/builder"
                />
            </div>
        );
    }
}

export default Preview;
