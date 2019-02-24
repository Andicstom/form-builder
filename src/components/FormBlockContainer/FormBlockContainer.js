import React, { Component } from 'react';
import FormBlock from '../FormBlock/FormBlock';
import FormBlockOptionItem from '../FormBlockOptionItem/FormBlockOptionItem';
import SimpleInputContent from '../SimpleInpuntContent/SimpleInputContent';
import AddFormBlockOptionItem from '../AddFormBlockOptionItem/AddFormBlockOptionItem';
import RangePikcer from '../RangePicker/RangePicker';
import CrudBar from '../CrudBar/CrudBar';
import TextArea from '../TextArea/TextArea';

class FormBlockContainer extends Component {
    renderFormBlocks = () => {
        let formBlocks = this.props.formBlocks;

        let formBlocksUI = formBlocks.map((formBlock, formBlockIndex) => {
            let key = formBlock.id;
            let type = formBlock.type;
            let options = formBlock.content.formBlockOptionItems;
            let props = formBlock.content.props;
            let content;
            if (
                type === 'text' ||
                type === 'date' ||
                type === 'dynamicInput' ||
                type === 'password' ||
                type === 'email' ||
                type === 'number' || 
                type === 'tel' ||
                type === 'color' ||
                type === 'time' 
            ) {
                content = (
                    <SimpleInputContent
                        id={key}
                        type={type}
                        disabled={true}
                        workAs={'answer'}
                        name={'answer'}
                        props={props}
                        changeDynamicInputType={
                            this.props.changeDynamicInputType
                        }
                    />
                );
            } else if (type === 'range') {
                content = (
                    <RangePikcer
                        id={key}
                        onMinNumberChange={this.props.onMinNumberChange}
                        onMaxNumberChange={this.props.onMaxNumberChange}
                        props={props}
                    />
                );
            } else if (type === 'longText') {
                content = <TextArea disabled={true} />;
            } else {
                content = (
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
            }

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
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <SimpleInputContent
                            type={'hideSpan'}
                            disabled={false}
                            workAs={'title'}
                            onSimpleInputChange={this.props.onSimpleInputChange}
                            name={this.props.title}
                        />
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        <SimpleInputContent
                            type={'hideSpan'}
                            disabled={false}
                            workAs={'description'}
                            onSimpleInputChange={this.props.onSimpleInputChange}
                            name={this.props.description}
                        />
                    </h6>
                </div>
                <ul className="list-group list-group-flush">
                    {this.renderFormBlocks()}
                </ul>
            </div>
        );
    }
}

export default FormBlockContainer;
