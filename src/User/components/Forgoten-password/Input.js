import React from 'react';

 const Input =(props) => {
    let valid='d-none';
    if(!props.emailValid){
            valid='';
       }else{
           valid='d-none';
       }

  return (
    <div class="form-group">
                        <label htmlFor="email">{props.title}</label>
                        <input type={props.type} className="form-control" id="email"
                        onChange={props.handleChange}
                        value={props.value}
                        name={props.name}
                        placeholder={props.placeholder}>
                        </input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                         <div className={`${valid} text-danger small`}>
                           {`* ${props.title} je neodgovarajuca`}
                         </div>
                    </div>
  )
}

export default Input;