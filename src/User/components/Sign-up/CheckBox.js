import React, { Component } from 'react';

class CheckBox extends Component {
    render() {
        return (
            <div className="form-group">
            <label className={props.clas} htmlFor={props.name}>{props.title}</label>
                <input type={props.type} 
                className={`form-control  ${props.clas}`}
                id={props.id}
                onChange={props.handleChange}
                value={props.value}
                name={props.name}>
                </input>
            </div>
        );
    }
}

export default CheckBox;