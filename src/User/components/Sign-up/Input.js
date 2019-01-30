import React from 'react';

 const Input =(props) => {
    // let valid='d-none';
    // if(props.value.length>1){
    //     if(props.value.length<5 || props.value.length>15){
    //         valid='';
    //    }else{
    //        valid='d-none';
    //    }
    // }

  return (
    <div className="form-group">
                        <label htmlFor="user-name">{props.title}</label>
                        <input type={props.type} className="form-control" id={props.id}
                        onChange={props.handleChange}
                        value={props.value}
                        name={props.name}
                        placeholder={props.placeholder}>
                        </input>
                         {/* <div className={`${valid} text-danger small`}>
                           {`* ${props.title} mora da bude izmedju 5 i 15 karaktera.`}
                         </div> */}
                    </div>
  )
}

export default Input;
