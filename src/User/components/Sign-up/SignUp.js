import React, { Component } from 'react';
import Input from './Input';
import axios from 'axios';

class SignUp extends Component {
    state={
        userData:{
            firstName:'',
            secondName:'',
            userName:'',
            email:'',
            password:'',
            password2:'',
        },
        validation:{
            firstName:false,
            secondName:false,
            userName:false,
            email:false,
            password:false,
            password2:false,
        }
    }

    handleChange=(event)=> {
        const name = event.target.name;
        let userData={};
        userData={...this.state.userData};
        userData[name]=event.target.value;
        console.log(userData)
       this.setState({ userData});
      }

    handleSubmit=(e)=> {
        e.preventDefault();
        alert('The value is: ' + this.state.userName + ' ' +this.state.password);
        this.setState({[name]:event.target.value});

        axios.post('https://jsonplaceholder.typicode.com/posts', 
            this.state
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.setState({ 
            userName: '',
            password: '',
        })
      }

    render() {
        return (
            <div className="wraper sign-up">
                  <h1>Sign up</h1>
               <form className="my-form">
                   <Input title= {'Ime'} 
                           type="text"
                           placeholder={'Enter your name'}
                           name="firstName"
                           id="firstName"
                           value={this.state.firstName}
                           handleChange={this.handleChange}
                          
                     />
                     <Input title= {'Prezime'} 
                           type="text"
                           placeholder={'Enter your second name'}
                           name="secondName"
                           id="secondName"
                           value={this.state.secondName}
                           handleChange={this.handleChange}
                        
                     />
                        <Input title= {'Username'} 
                           type="text"
                           placeholder={'Enter your username'}
                           name="userName"
                           id="userName"
                           value={this.state.userName}
                           handleChange={this.handleChange}
                           emailValid={this.state.emailValid}
                     />
                     <Input title= {'Email'} 
                           type="text"
                           placeholder={'Enter your email adress'}
                           name="email"
                           id="email"
                           value={this.state.email}
                           handleChange={this.handleChange}
                           emailValid={this.state.emailValid}
                     />
                        <Input title= {'Password'} 
                           type="password"
                           placeholder={'Enter your password'}
                           name="password"
                           id="password"
                           value={this.state.password}
                           handleChange={this.handleChange}
                          
                     />
                          <Input title= {'Repeat your password'} 
                           type="password"
                           placeholder={'Repeat your password'}
                           name="password2"
                           id="password2"
                           value={this.state.password2}
                           handleChange={this.handleChange}
                          
                     />
                    
                    <button type="submit" class="btn btn-primary myBtn">Uloguj se</button>
             </form>
            </div>
        );
    }
}

export default SignUp;