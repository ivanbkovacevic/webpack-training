import React, { Component } from 'react';

class CheckBox extends Component {
    render() {
        return (
          
    

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text isCoach">
                        <label  htmlFor="isCoach">Sign Up as a coach</label>
                        <input type="checkbox" 
                        name="isCoach" 
                        id="isCoach"
                        onChange={this.props.handleChange}
                        ></input>
                        </div>
                    </div>
                 </div>
          
        );
    }
}

export default CheckBox;
        {/* <label className={props.clas} htmlFor={props.name}>{props.title}</label>
                <input type={props.type} 
                className={`form-control  ${props.clas}`}
                id={props.id}
                onChange={props.handleChange}
                value={props.value}
                name={props.name}>
                </input> */}