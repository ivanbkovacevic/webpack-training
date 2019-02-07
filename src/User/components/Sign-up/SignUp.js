import React, { Component } from 'react';
import Input from './Input';
import CheckBox from './CheckBox';
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
            isCoach:false
        },
        validation:{
            firstName:false,
            lastName:false,
            userName:false,
            email:false, 
            password:false,
            password2:false,
            submit:false   
            },
        validationText:{
            firstNameMsg:'',
            firstNameClass:'',
            lastNameMsg:'',
            lastNameClass:'',
            userNameMsg:'',
            userNameClass:'',
            emailMsg:'',
            emailClass:'',
            passwordMsg:'',
            passwordClass:'',
            password2Msg:'',
            password2Class:'',
            isCoachClass:'isCoach'
        }
    }

    handleChange=(event)=> {
        const name = event.target.name;
        let userData={};
        let validation={};
        let validationText={};
        userData={...this.state.userData};
        validation={...this.state.validation};
        validationText={...this.state.validationText};
      //  userData[name]=event.target.value;
       // console.log(userData,validation)
       // this.setState({ userData});
// #############email###########
        if(name==='email'){
            let emailPattern=/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
            let email = event.target.value;
            let emailValid=emailPattern.test(email);
            validation.email=emailValid;
            if(emailValid){
                validation.email=true;
                validationText.emailMsg="OK je";
                validationText.emailClass="is-valid";
                userData.email=event.target.value;
                this.setState({userData,validation,validationText});
            }else{
                    validation.email=false;
                    validationText.emailMsg="Email adresa mora da bude odgovarajuca";
                    validationText.emailClass="is-invalid";
                    this.setState({ validation,validationText});
            }
          
        }else if(name==='firstName'){ //firstName
                if(event.target.value.length>2){
                    validation.firstName=true;
                    validationText.firstNameMsg="OK je";
                    validationText.firstNameClass="is-valid";
                    userData.firstName=event.target.value;
                    this.setState({userData,validation,validationText});
                }else{
                    validation.firstName=false;
                    validationText.firstNameMsg="Ime mora da bude minimum 3 slova";
                    validationText.firstNameClass="is-invalid";
                    this.setState({ validation,validationText});
                }
        }else if(name==='lastName'){ // lastName
            if(event.target.value.length>3){
                validation.lastName=true;
                validationText.lastNameMsg="OK je";
                validationText.lastNameClass="is-valid";
                userData.lastName=event.target.value;
                this.setState({userData,validation,validationText});
            }else{
                   validation.lastName=false;
                    validationText.lastNameMsg="Prezime mora da bude minimum 3 slova";
                    validationText.lastNameClass="is-invalid";
                    this.setState({ validation,validationText});
            }
        }else if(name==='userName'){ // userName
            if(event.target.value.length>2){
                validation.userName=true;
                validationText.userNameMsg="OK je";
                validationText.userNameClass="is-valid";
                userData.userName=event.target.value;
                this.setState({userData,validation,validationText});
        }else{
            validation.userName=false;
            validationText.userNameMsg="Username mora da bude minimum 3 slova";
            validationText.userNameClass="is-invalid";
            this.setState({ validation,validationText});
        }
        }else if(name==='password'){ // password
           if(event.target.value.length>5){
            validation.password=true;
            validationText.passwordMsg="OK je";
            validationText.passwordClass="is-valid";
            userData.password=event.target.value;
                this.setState({userData,validation,validationText});
         }else{
            validation.password=false;
            validationText.passwordMsg="Sifra mora da bude minimum 6 karaktera";
            validationText.passwordClass="is-invalid";
            this.setState({ validation,validationText});
         }
        }else if(name==='password2'){    // password
            if(userData.password===event.target.value){
                validation.password2=true;
                validationText.password2Msg="OK je";
                validationText.password2Class="is-valid";
                userData.password2=event.target.value;
                this.setState({userData,validation,validationText});
            }else{
                validation.password2=false;
                validationText.password2Msg="Sifre mora da odgovaraju jedna drugoj";
                validationText.password2Class="is-invalid";
                this.setState({ validation,validationText});    
           } 
          }else if(name==='isCoach'){
              if(event.target.checked){
                userData.isCoach=true;
                this.setState({userData,validationText});
              }else{
                userData.isCoach=false;
                this.setState({userData});
              }
              
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
        isCoach:false
    },
    validation:{
        firstName:false,
        lastName:false,
        userName:false,
        email:false, 
        password:false,
        password2:false,
        submit:false   
        },
    validationText:{
        firstNameMsg:'',
        firstNameClass:'',
        lastNameMsg:'',
        lastNameClass:'',
        userNameMsg:'',
        userNameClass:'',
        emailMsg:'',
        emailClass:'',
        passwordMsg:'',
        passwordClass:'',
        password2Msg:'',
        password2Class:'',
        isCoachClass:'isCoach'

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
                           class={this.state.validationText.firstNameClass}
                           message={this.state.validationText.firstNameMsg}
                           value={this.state.firstName}
                           handleChange={this.handleChange}
                          
                     />
                     <Input title= {'Prezime'} 
                           type="text"
                           placeholder={'Enter your second name'}
                           name="lastName"
                           id="lastName"
                           value={this.state.secondName}
                           class={this.state.validationText.lastNameClass}
                           message={this.state.validationText.lastNameMsg}
                           handleChange={this.handleChange}
                        
                     />
                        <Input title= {'Username'} 
                           type="text"
                           placeholder={'Enter your username'}
                           name="userName"
                           id="userName"
                           value={this.state.userName}
                           class={this.state.validationText.userNameClass}
                           message={this.state.validationText.userNameMsg}
                           handleChange={this.handleChange}
                          
                     />
                     <Input title= {'Email'} 
                           type="text"
                           placeholder={'Enter your email adress'}
                           name="email"
                           id="email"
                           value={this.state.email}
                           class={this.state.validationText.emailClass}
                           message={this.state.validationText.emailMsg}
                           handleChange={this.handleChange}
                        
                     />
                        <Input title= {'Password'} 
                           type="password"
                           placeholder={'Enter your password'}
                           name="password"
                           id="password"
                           value={this.state.password}
                           class={this.state.validationText.passwordClass}
                           message={this.state.validationText.passwordMsg}
                           handleChange={this.handleChange}
                          
                     />
                          <Input title= {'Repeat your password'} 
                           type="password"
                           placeholder={'Repeat your password'}
                           name="password2"
                           id="password2"
                           value={this.state.password2}
                           class={this.state.validationText.password2Class}
                           message={this.state.validationText.password2Msg}
                           handleChange={this.handleChange}
                     />    
                
                     <CheckBox
                      handleChange={this.handleChange}/>     

                    <button type="submit" className="btn btn-primary myBtn"
                    disabled={!this.state.validation.submit}>Registruj se</button>
             </form>
            </div>
        );
    }
}

export default SignUp;