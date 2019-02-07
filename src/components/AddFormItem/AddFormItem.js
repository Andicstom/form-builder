import React from 'react';

function AddFormItem() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Add New
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item" type="button" onClick={() => (console.log('text'))}>
          Text
        </button>
        <button className="dropdown-item" type="button" onClick={() => (console.log('single'))}>
          Single choice
        </button>
        <button className="dropdown-item" type="button" onClick={() => (console.log('multi'))}>
          Multi choices
        </button>
        <button className="dropdown-item" type="button" onClick={() => (console.log('dropdawn'))}>
          Dropdawn
        </button>
        <button className="dropdown-item" type="button" onClick={() => (console.log('date'))}>
          Date
        </button>
      </div>
    </div>
  );
}

export default AddFormItem;
