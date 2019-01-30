import React, { Component } from 'react';
import Input from './Input';
import axios from 'axios';

class ForgotenPassword extends Component {
    state={
        email:'',
        emailValid:false, 
        validPassword:'d-none'   
    }

    handleChange=(event)=> {
        let emailPattern=/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
        let email = event.target.value;
        let emailValid=emailPattern.test(email);
       
       this.setState({email,emailValid});
        console.log(this.state.email)
        console.log(emailValid);
      }

    handleSubmit=(e)=> {
        e.preventDefault();
        this.setState({email:event.target.value,emailValid});

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            email: this.state.email
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.setState({ 
            email:''
        })
      }

    render() {
        return (
            <div className="forgoten-password wraper">
            <h1>Zaboravili ste lozinku</h1>
              <form onSubmit={this.handleSubmit} className="my-form">
              <Input title= {'Email adresa'} 
                            type="email"
                           placeholder={'Enter your email adress'}
                           name="email"
                           value={this.state.email}
                           handleChange={this.handleChange}
                           emailValid={this.state.emailValid}
                         />
                    <button type="submit" className="btn btn-primary myBtn"
                    disabled={!this.state.emailValid} >Posalji</button>
                </form>
            </div>
        );
    }
}

export default ForgotenPassword;