import React from 'react';

 const Input =(props) => {

  return (
    <div className="form-group">
                <label className={props.class} htmlFor={props.name}>{props.title}</label>
                <input type={props.type} 
                className={`form-control  ${props.classForInput}`}
                id={props.id}
                onChange={props.handleChange}
                value={props.value}
                name={props.name}
                required
                placeholder={props.placeholder}>
                </input>
                  {/* <div className={props.messageClass}>
                     {props.message}
                  </div> */}
                    </div>
  )
}

export default Input;
