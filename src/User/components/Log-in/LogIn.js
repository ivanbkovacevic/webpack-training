import React, { Component } from 'react';


class LogIn extends Component {
    render() {
        return (
            <div className="log-in wraper"> 
            <h1>LOG IN</h1>
             <form className="my-form">
                    <div class="form-group">
                        <label for="user-name">Korisnicko ime:</label>
                        <input type="text" class="form-control" id="user-name"  placeholder="Unesite vase korisnicko ime"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Sifra</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Sifra"></input>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Zapamti me</label>
                    </div>
                    <button type="submit" class="btn btn-primary loginBtn">Uloguj se</button>
             </form>
            </div>
                            
            
        );
    }
}

export default LogIn;