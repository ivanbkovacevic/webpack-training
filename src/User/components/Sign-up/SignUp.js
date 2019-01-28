import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="wraper sign-up">
                  <h1>Sign up</h1>
               <form className="my-form">
                    <div class="form-group">
                        <label for="name">Ime:</label>
                        <input type="text" class="form-control" id="name"  placeholder="Ime"></input>
                    </div>
                    <div class="form-group">
                        <label for="last-name">Prezime:</label>
                        <input type="text" class="form-control" id="last-name"  placeholder="Prezime"></input>
                    </div>
                    <div class="form-group">
                        <label for="user-name">Korisnicko ime:</label>
                        <input type="text" class="form-control" id="user-name"  placeholder="Korisnicko ime"></input>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email"  placeholder="Vasa email adresa"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Sifra</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Sifra"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword2">Potvrdi sifru</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Potvrdi sifra"></input>
                    </div>
                    
                    <button type="submit" class="btn btn-primary myBtn">Uloguj se</button>
             </form>
            </div>
        );
    }
}

export default SignUp;