import React, { Component } from 'react';
import Input from './Input';
import SelectDropDowns from './SelectDropDown';


class Apointments extends Component {
    state={
        apointmentData:{
            name:"trening",
            duration:"20",
            startDate:"2019-01-01",
            startTime:"14:00:00",
            type:["tezak","umeren","lak"],
            location:"Pancevo",
            users:[1]
        }
    }

    handleChange=(event)=> {
        const name = event.target.name;
        let apointmentData={};
        apointmentData={...this.state.apointmentData};
     
      apointmentData[name]=event.target.value;
      this.setState({ apointmentData});
       console.log(apointmentData)
    }

    handleSubmit=(e)=> { // submit and send data
        e.preventDefault();
      
        this.setState({apointmentData});
        console.log(this.state)

        // axios.post('https://jsonplaceholder.typicode.com/posts', 
        //     this.state
        //   )
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

   this.setState({       // reseting form
    apointmentData:{
        name:"trening",
        duration:"20",
        startDate:"2019-01-01",
        startTime:"14:00:00",
        type:["tezak","umeren","lak"],
        location:"Pancevo",
        users:[1]
    }})

    }


    render() {
      
        return (
            <div className="wraper apointments">
                <h1>Apointments</h1>
                <form className="my-form">
              <Input title= {'Name'} 
                           type="text"
                           placeholder={'Enter your name'}
                           name="name"
                           id="name"
                           value={this.state.apointmentData.name}
                        //    class={"this.state.validationText.userNameClass"}
                        //    message={"this.state.validationText.userNameMsg"}
                        //    messageClass={this.state.validation.userName ?  "valid-feedback" : "invalid-feedback" }
                           handleChange={"this.handleChange"}  
                              
                     />
                   <Input title= {'Duration'} 
                           type="number"
                           placeholder='Enter duration'
                           name="duration"
                           id="duration"
                           value={this.state.apointmentData.duration}
                        //    class={"this.state.validationText.userNameClass"}
                        //    message={"this.state.validationText.userNameMsg"}
                        //    messageClass={this.state.validation.userName ?  "valid-feedback" : "invalid-feedback" }
                           handleChange={this.handleChange}     
                     />
                     <Input title= {'Start date'} 
                           type="date"
                         
                           name="startDate"
                           id="startDate"
                           value={this.state.apointmentData.startDate}
                        //    class={"this.state.validationText.userNameClass"}
                        //    message={"this.state.validationText.userNameMsg"}
                        //    messageClass={this.state.validation.userName ?  "valid-feedback" : "invalid-feedback" }
                           handleChange={this.handleChange}     
                     />
                       <Input title= {'Start time'} 
                           type="time"
                           placeholder='Enter start time'
                           name="startTime"
                           id="startTime"
                           value={this.state.apointmentData.startTime}
                        //    class={"this.state.validationText.userNameClass"}
                        //    message={"this.state.validationText.userNameMsg"}
                        //    messageClass={this.state.validation.userName ?  "valid-feedback" : "invalid-feedback" }
                           handleChange={this.handleChange}     
                     />
                      
                      <SelectDropDowns
                       title= {'Type of training'} 
                       type="text"
                       placeholder='Enter type of training'
                       name="type"
                       id="type"
                       value={this.state.apointmentData.type}
                    //    class={"this.state.validationText.userNameClass"}
                    //    message={"this.state.validationText.userNameMsg"}
                    //    messageClass={this.state.validation.userName ?  "valid-feedback" : "invalid-feedback" }
                       handleChange={this.handleChange}     
                      />
                        <Input title= {'Location'} 
                           type="text"
                           placeholder='Enter your location'
                           name="location"
                           id="location"
                           value={this.state.apointmentData.location}
                        //    class={"this.state.validationText.userNameClass"}
                        //    message={"this.state.validationText.userNameMsg"}
                        //    messageClass={this.state.validation.userName ?  "valid-feedback" : "invalid-feedback" }
                           handleChange={this.handleChange}     
                     />
                      <button type="submit" className="btn btn-primary myBtn"
                    >Zakazi</button>
                </form>
               
            </div>
        );
    }
}

export default Apointments;