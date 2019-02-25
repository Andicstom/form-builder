import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Builder from './pages/Builder/Builder';
import Preview from './pages/Preview/Preview';
import SimpleModal from './components/SimpleModal/SimpleModal';
import _ from 'lodash';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Add your title',
            description: 'Add your description',
            formBlocks: [
                {
                    id: uuid.v4(),
                    type: 'text',
                    title: 'Questin 1',
                    content: {
                        props: {},
                        formBlockOptionItems: []
                    }
                }
            ]
        };
    }

    addFormBlock = type => {
        const newFormBlock = {
            id: uuid.v4(),
            type,
            title: 'Questin ' + this.getFormBlocksSize(),
            content: {
                props: {},
                formBlockOptionItems: []
            }
        };
        this.setState({ formBlocks: [...this.state.formBlocks, newFormBlock] });
    };

    deleteFormBlock = id => {
        this.setState({
            formBlocks: this.state.formBlocks.filter(
                formBlock => formBlock.id !== id
            )
        });
    };

    moveFormBlockUp = id => {
        let formBlocks = _.cloneDeep(this.state.formBlocks);

        for (let [index, formBlock] of formBlocks.entries()) {
            if (formBlock.id === id) {
                let temp = formBlocks[index - 1];
                formBlocks[index - 1] = formBlocks[index];
                formBlocks[index] = temp;
                break;
            }
        }

        this.setState({ formBlocks });
    };

    moveFormBlockDown = id => {
        let formBlocks = _.cloneDeep(this.state.formBlocks);

        for (let [index, formBlock] of formBlocks.entries()) {
            if (formBlock.id === id) {
                let temp = formBlocks[index + 1];
                formBlocks[index + 1] = formBlocks[index];
                formBlocks[index] = temp;
                break;
            }
        }

        this.setState({ formBlocks });
    };

    addFormBlockOption = formBlockId => {
        const formBlocks = _.cloneDeep(this.state.formBlocks);

        const newFormBlockOption = {
            id: uuid.v4(),
            content: 'option'
        };

        for (let formBlock of formBlocks) {
            if (formBlock.id === formBlockId) {
                formBlock.content.formBlockOptionItems = [
                    ...formBlock.content.formBlockOptionItems,
                    newFormBlockOption
                ];
                break;
            }
        }

        this.setState({ formBlocks });
    };

    deleteOption = optionId => {
        const formBlocks = _.cloneDeep(this.state.formBlocks);

        for (let formBlock of formBlocks) {
            let options = formBlock.content.formBlockOptionItems;

            for (let [index, option] of options.entries()) {
                if (option.id === optionId) {
                    let newOptions = options.filter(
                        option => option.id !== optionId
                    );
                    formBlock.content.formBlockOptionItems = newOptions;
                    break;
                }
            }
        }
        this.setState({ formBlocks });
    };

    moveOptionUp = optionId => {
        const formBlocks = _.cloneDeep(this.state.formBlocks);

        for (let formBlock of formBlocks) {
            let options = formBlock.content.formBlockOptionItems;
            for (let [index, option] of options.entries()) {
                if (option.id === optionId) {
                    let temp = options[index - 1];
                    options[index - 1] = options[index];
                    options[index] = temp;
                    formBlock.content.formBlockOptionItems = options;
                    break;
                }
            }
        }
        this.setState({ formBlocks });
    };

    moveOptionDown = optionId => {
        const formBlocks = _.cloneDeep(this.state.formBlocks);

        for (let formBlock of formBlocks) {
            let options = formBlock.content.formBlockOptionItems;
            for (let [index, option] of options.entries()) {
                if (option.id === optionId) {
                    let temp = options[index + 1];
                    options[index + 1] = options[index];
                    options[index] = temp;
                    formBlock.content.formBlockOptionItems = options;
                    break;
                }
            }
        }
        this.setState({ formBlocks });
    };

    formOnsubmit = e => {
        console.log(e);
    };

    getFormBlocksSize = () => {
        return this.state.formBlocks.length + 1;
    };

    onFormOptionNameChange = (id, content) => {
        const formBlocks = _.cloneDeep(this.state.formBlocks);
        for (let formBlock of formBlocks) {
            let options = formBlock.content.formBlockOptionItems;
            for (let option of options) {
                if (option.id === id) {
                    option.content = content;
                    formBlock.content.formBlockOptionItems = options;
                    this.setState({ formBlocks });
                    return;
                }
            }
        }
    };

    onFormBlockNameChange = (id, title) => {
        const formBlocks = _.cloneDeep(this.state.formBlocks);
        for (let formBlock of formBlocks) {
            if (formBlock.id === id) {
                formBlock.title = title;
                break;
            }
        }

        this.setState({ formBlocks });
    };

    onSimpleInputChange = (value, workAs) => {
        workAs === 'title'
            ? this.setState({ title: value })
            : this.setState({ description: value });
    };

    onMinNumberChange = (formBlockId, minNumber) => {
        const formBlocks = _.cloneDeep(this.state.formBlocks);
        for (let formBlock of formBlocks) {
            if (formBlock.id === formBlockId) {
                formBlock.content.props.min = minNumber;
                break;
            }
        }
        this.setState({ formBlocks });
    };

    onMaxNumberChange = (formBlockId, maxNumber) => {
        const formBlocks = _.cloneDeep(this.state.formBlocks);
        for (let formBlock of formBlocks) {
            if (formBlock.id === formBlockId) {
                formBlock.content.props.max = maxNumber;
                break;
            }
        }
        this.setState({ formBlocks });
    };

    changeDynamicInputType = (formBlockId, type) => {
        const formBlocks = _.cloneDeep(this.state.formBlocks);
        for (let formBlock of formBlocks) {
            if (formBlock.id === formBlockId) {
                formBlock.type = type;
                break;
            }
        }
        this.setState({ formBlocks });
    };

    resetFormData = () => {
        let formBlocks = [
            {
                id: uuid.v4(),
                type: 'text',
                title: 'Questin 1',
                content: {
                    props: {},
                    formBlockOptionItems: []
                }
            }
        ];

        this.setState({ formBlocks });
    };

    showResetFormModal = modalId => {
        
    };

    hideResetFormModal = modalId => {
        // get modal
        const modal = document.getElementById(modalId);

        // change state like in hidden modal
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('style', 'display: none');

        // get modal backdrop
        const modalBackdrops = document.getElementsByClassName(
            'modal-backdrop'
        );

        // remove opened modal backdrop
        document.body.removeChild(modalBackdrops[0]);
    };

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <SimpleModal
                        id="resetFormModal"
                        modalTitle="Are you sure?"
                        modalText="Reset Form"
                        positiveBtnText="Reset"
                    />
                    <br />
                    <Route exact path="/" component={Home} />
                    <Route
                        path="/builder"
                        render={() => (
                            <Builder
                                formBlocks={this.state.formBlocks}
                                addFormBlockOption={this.addFormBlockOption}
                                deleteOption={this.deleteOption}
                                moveOptionUp={this.moveOptionUp}
                                moveOptionDown={this.moveOptionDown}
                                addFormBlock={this.addFormBlock}
                                deleteFormBlock={this.deleteFormBlock}
                                moveFormBlockUp={this.moveFormBlockUp}
                                moveFormBlockDown={this.moveFormBlockDown}
                                onFormOptionNameChange={
                                    this.onFormOptionNameChange
                                }
                                onFormBlockNameChange={
                                    this.onFormBlockNameChange
                                }
                                onSimpleInputChange={this.onSimpleInputChange}
                                title={this.state.title}
                                description={this.state.description}
                                onMinNumberChange={this.onMinNumberChange}
                                onMaxNumberChange={this.onMaxNumberChange}
                                changeDynamicInputType={
                                    this.changeDynamicInputType
                                }
                                resetFormData={this.resetFormData}
                            />
                        )}
                    />
                    <Route
                        path="/preview"
                        render={() => (
                            <Preview
                                formData={this.state.formBlocks}
                                onSubmit={this.onSubmit}
                                title={this.state.title}
                                description={this.state.description}
                            />
                        )}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
