import React, { Component } from 'react';
import AddFormItem from '../../components/AddFormItem/AddFormItem';
import FormBlockContainer from '../../components/FormBlockContainer/FormBlockContainer';
import SimpleLinkButton from '../../components/SimpleLinkButton/SimpleLinkButton';

class Builder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Title',
            description: 'Description'
        };
    }

    render() {
        return (
            <div className="container w-50">
                <FormBlockContainer
                    formBlocks={this.props.formBlocks}
                    addFormBlockOption={this.props.addFormBlockOption}
                    deleteOption={this.props.deleteOption}
                    moveOptionUp={this.props.moveOptionUp}
                    moveOptionDown={this.props.moveOptionDown}
                    deleteFormBlock={this.props.deleteFormBlock}
                    moveFormBlockUp={this.props.moveFormBlockUp}
                    moveFormBlockDown={this.props.moveFormBlockDown}
                    onFormOptionNameChange={this.props.onFormOptionNameChange}
                    onFormBlockNameChange={this.props.onFormBlockNameChange}
                    onSimpleInputChange={this.props.onSimpleInputChange}
                    title={this.props.title}
                    description={this.props.description}
                    onMinNumberChange={this.props.onMinNumberChange}
                    onMaxNumberChange={this.props.onMaxNumberChange}
                    changeDynamicInputType={this.props.changeDynamicInputType}
                />
                <AddFormItem addFormBlock={this.props.addFormBlock} />
                <SimpleLinkButton
                    title="Show preview"
                    className="btn btn-success"
                    toLink="/preview"
                />
            </div>
        );
    }
}

export default Builder;
