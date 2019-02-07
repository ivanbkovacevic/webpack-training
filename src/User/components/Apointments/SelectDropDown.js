import React from 'react';

 const SelectDropDown =(props) => {

  return (
    <div className="form-group">
                <label className={props.class} htmlFor={props.name}>{props.title}</label>
                <select type={props.type} 
                className={`form-control  ${props.classForInput}`}
                id={props.id}
                name={props.name}
             //   onChange={props.handleChange}
                >
                 <option value={props.value[0]}>{props.value[0]}</option>
                 <option value={props.value[1]}>{props.value[1]}</option>
                 <option value={props.value[2]}>{props.value[2]}</option>
                
                </select>
              
                    </div>


  )
}

export default SelectDropDown;
