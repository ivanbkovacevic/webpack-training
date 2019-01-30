import React, { Component } from 'react';
import Input from './Input';
import axios from 'axios';

class SignUp extends Component {
    state={
        userData:{
            firstName:'',
            lastName:'',
            userName:'',
            email:'',
            password:'',
            password2:'',
        },
        validation:{
            firstName:false,
            lastName:false,
            userName:false,
            email:false,
            password:false,
            password2:false,
            submit:false
        }
    }

    handleChange=(event)=> {
        const name = event.target.name;
        let userData={};
        let validation={};
        userData={...this.state.userData};
        validation={...this.state.validation};
        userData[name]=event.target.value;
        console.log(userData,validation)
// #############email###########
        if(name==='email'){
            let emailPattern=/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
            let email = event.target.value;
            let emailValid=emailPattern.test(email);
            validation.email=emailValid;
            if(emailValid){
                this.setState({ userData,validation});
            }
          
        }else if(name==='firstName'){ //firstName
                if(event.target.value.length>3){
                    validation.firstName=true;
                    this.setState({ userData,validation});
                }
        }else if(name==='lastName'){ // lastName
            if(event.target.value.length>3){
                validation.lastName=true;
         
                this.setState({ userData,validation});
            }
    }else if(name==='userName'){ // userName
        if(event.target.value.length>3){
            validation.userName=true;
        
            this.setState({ userData,validation});
        }
}else if(name==='password'){ // password
    if(event.target.value.length>7){
        validation.password=true;
      
        this.setState({ userData,validation});
    }
}else if(name==='password2'){    // password
    if(userData.password===event.target.value){
        validation.password2=true;
        this.setState({ userData,validation});
    }
}{
}

let okToSubmit;
for(let i in validation){ // checking is everything valid for submiting
   if(validation[i]===true){
     okToSubmit=true;
   }else{
       okToSubmit=false;
   }
   validation.submit=okToSubmit;
   this.setState({validation});
}   
      }

    handleSubmit=(e)=> { // submit and send data
        e.preventDefault();
      
        this.setState({userData,validation});
        console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/posts', 
            this.state
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

   this.setState({       // reseting form
                userData:{
                firstName:'',
                lastName:'',
                userName:'',
                email:'',
                password:'',
                password2:'',
            },
            validation:{
                firstName:false,
                lastName:false,
                userName:false,
                email:false,
                password:false,
                password2:false,
                submit:false
            }})
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
                           name="lastName"
                           id="lastName"
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
                    <button type="submit" class="btn btn-primary myBtn"
                    disabled={!this.state.validation.submit}>Uloguj se</button>
             </form>
            </div>
        );
    }
}

export default SignUp;