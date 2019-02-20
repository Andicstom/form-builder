import React, { Component } from 'react';
import FormBlock from '../FormBlock/FormBlock';
import FormBlockOptionItem from '../FormBlockOptionItem/FormBlockOptionItem';
import SimpleInputContent from '../SimpleInpuntContent/SimpleInputContent';
import AddFormBlockOptionItem from '../AddFormBlockOptionItem/AddFormBlockOptionItem';
import CrudBar from '../CrudBar/CrudBar';

class FormBlockContainer extends Component {
    renderFormBlocks = () => {
        let formBlocks = this.props.formBlocks;

        let formBlocksUI = formBlocks.map((formBlock, formBlockIndex) => {
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
                                        id={option.id}
                                        index={index}
                                        listSize={options.length}
                                        deleteItem={this.props.deleteOption}
                                        moveItemUp={this.props.moveOptionUp}
                                        moveItemDown={this.props.moveOptionDown}
                                    />
                                }
                                onFormOptionNameChange={
                                    this.props.onFormOptionNameChange
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
                    id={key}
                    title={formBlock.title}
                    content={content}
                    crudBar={
                        <CrudBar
                            id={key}
                            index={formBlockIndex}
                            listSize={formBlocks.length}
                            deleteItem={this.props.deleteFormBlock}
                            moveItemUp={this.props.moveFormBlockUp}
                            moveItemDown={this.props.moveFormBlockDown}
                        />
                    }
                    onFormBlockNameChange={this.props.onFormBlockNameChange}
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
