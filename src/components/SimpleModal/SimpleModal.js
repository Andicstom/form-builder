import React from 'react';

const SimpleModal = props => {
    const modalTitle = props.modalTitle || 'Modal title';
    const modalText = props.modalText || 'Modal text';
    const positiveBtnText = props.positiveBtnText || 'Save changes';
    const negativeBtnText = props.negativeBtnText || 'Close';
    const modalId = props.id || 'exampleModal';

    return (
        <div className="modal" tabIndex="-1" role="dialog" id={modalId}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalTitle}</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{modalText}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            {negativeBtnText}
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => props.onClick()}
                        >
                            {positiveBtnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleModal;
