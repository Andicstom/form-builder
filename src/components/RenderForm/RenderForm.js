import React, { Component } from 'react';

class RenderForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getNonInputFormElem = formElem => {
        let options = formElem.content.formBlockOptionItems;
        return (
            <select className="form-control" id={formElem.id}>
                {options.map((option, index) => (
                    <option key={option.id}>{option.content}</option>
                ))}
            </select>
        );
    };

    isNonInputFormElem = type => {
        if (type === 'dropdown') {
            return true;
        }

        return false;
    };

    isOptionTypeInputElem = type => {
        return type === 'checkbox' || type === 'date' || type === 'radio';
    }

    renderForm = () => {
        let formData = this.props.formData;
        let formUI = formData.map(formElem => {
            let key = formElem.id;
            let type = formElem.type;
            let options = formElem.content.formBlockOptionItems;
            let props = formElem.content.props;
            console.log(props);

            return (
                <div key={key} className="form-group">
                    <label key={'l' + key} className="form-label" htmlFor={key}>
                        {formElem.title}
                    </label>
                    {this.isNonInputFormElem(type) ? (
                        this.getNonInputFormElem(formElem)
                    ) : this.isOptionTypeInputElem(type) ? (
                        options.map((option, index) => (
                            <div className="form-check" key={option.id}>
                                <input
                                    className="form-check-input"
                                    type={type}
                                    value={option.content}
                                    name={'option' + key}
                                    id={option.id}
                                    defaultChecked={index === 0 ? true : false}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={option.id}
                                >
                                    {option.content}
                                </label>
                            </div>
                        ))
                    ) : (
                        <input
                            {...props}
                            type={type}
                            ref={key => {
                                this[formElem.key] = key;
                            }}
                            className="form-control"
                            key={'i' + key}
                            id={key}
                        />
                    )}
                </div>
            );
        });

        return formUI;
    };

    render() {
        let title = this.props.title || 'Your fantastic form';
        let desc = this.props.description || 'Your fantastic form description';

        return (
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{desc}</h6>
                <br />
                <form onSubmit={e => this.onSubmit(e)}>
                    {this.renderForm()}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default RenderForm;
