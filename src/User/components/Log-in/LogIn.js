import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';

class LogIn extends Component {
    state={
        userName:'',
        password:'',
        validUserName:'d-none', 
        validPassword:'d-none'   
    }

    handleChange=(event)=> {
        const name = event.target.name;
       this.setState({[name]:event.target.value});
        console.log(this.state.userName)
        console.log(this.state.password)
      }

    handleSubmit=(e)=> {
        e.preventDefault();
        alert('The value is: ' + this.state.userName + ' ' +this.state.password);
        this.setState({[name]:event.target.value});

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            userName: this.state.userName,
            password: this.state.password
          })
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
            <div className="log-in wraper"> 
            <h1>LOG IN</h1>
             <form className="my-form" onSubmit={this.handleSubmit} id="logInForm">
                    {/* <div class="form-group">
                        <label htmlFor="user-name">Korisnicko ime:</label>
                        <input type="text" className="form-control" id="user-name"
                        onChange={this.handleChange}
                        value={this.state.userName}
                        name="userName"
                        placeholder="Unesite vase korisnicko ime"></input>
                         <div className={`${this.state.validUserName} text-danger small`}>
                           * Korisnicko ime mora da bude izmedju 5 i 15 karaktera.
                         </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Sifra</label>
                        <input type="password" className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Sifra"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"></input>
                    </div>
                    <div className={`${this.state.validPassword} text-danger small`}>
                           * Sifra mora da bude izmedju 5 i 15 karaktera.
                    </div> */}
                    <Input title= {'Username'} 
                            type="text"
                           placeholder={'Enter your username'}
                           name="userName"
                           value={this.state.userName}
                           handleChange={this.handleChange}
                         />
                    <Input title= {'Password'} 
                           type="password"
                           placeholder={'Enter your password'}
                           name="password"
                           value={this.state.password}
                           handleChange={this.handleChange}
                          />

                    <button type="submit" className="btn btn-primary loginBtn" >Uloguj se</button>
             </form>
                
            </div>
                            
            
        );
    }
}

export default LogIn;