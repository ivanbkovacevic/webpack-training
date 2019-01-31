import React from 'react';

 const Input =(props) => {
  let isValidNeutral='';

  return (
    <div className="form-group">
                <label htmlFor="user-name">{props.title}</label>
                <input type={props.type} 
                className={`form-control  ${props.class}`}
                id={props.id}
                onChange={props.handleChange}
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}>
                </input>
                  <div className={props.messageClass}>
                     {props.message}
                  </div>
                    </div>
  )
}

export default Input;
