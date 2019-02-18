import React, { Component } from 'react';
import FormBlock from '../FormBlock/FormBlock';
import FormBlockOptionItem from '../FormBlockOptionItem/FormBlockOptionItem';
import SimpleInputContent from '../SimpleInpuntContent/SimpleInputContent';
import AddFormBlockOptionItem from '../AddFormBlockOptionItem/AddFormBlockOptionItem';
import CrudBar from '../CrudBar/CrudBar';

class FormBlockContainer extends Component {
    renderFormBlocks = () => {
        let formBlocks = this.props.formBlocks;

        let formBlocksUI = formBlocks.map(formBlock => {
            let key = formBlock.id;
            let type = formBlock.type;
            let options = formBlock.content.formBlockOptionItems;
            let content =
                type === 'text' || type === 'date' ? (
                    <SimpleInputContent type={type} disabled={true} />
                ) : (
                    <div>
                        {options.map((option, index) => (
                            <FormBlockOptionItem
                                key={option.id}
                                option={option}
                                type={formBlock.type}
                                index={index}
                                crudBar={
                                    <CrudBar
                                        parentId={formBlock.id}
                                        optionId={option.id}
                                        index={index}
                                        optionsSize={options.length}
                                        deleteOption={this.props.deleteOption}
                                        moveOptionUp={this.props.moveOptionUp}
                                        moveOptionDown={
                                            this.props.moveOptionDown
                                        }
                                    />
                                }
                            />
                        ))}
                        <AddFormBlockOptionItem
                            addFormBlockOption={this.props.addFormBlockOption}
                            parentId={formBlock.id}
                        />
                    </div>
                );

            return (
                <FormBlock
                    key={key}
                    title={formBlock.title}
                    content={content}
                />
            );
        });

        return formBlocksUI;
    };

    render() {
        return <React.Fragment>{this.renderFormBlocks()}</React.Fragment>;
    }
}

export default FormBlockContainer;
