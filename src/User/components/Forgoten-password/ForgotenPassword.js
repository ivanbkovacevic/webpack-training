import React, { Component } from 'react';

class ForgotenPassword extends Component {
    render() {
        return (
            <div className="forgoten-password wraper">
            <h1>Zaboravili ste lozinku</h1>
              <form className="my-form">
                <div class="form-group">
                    <label for="exampleInputEmail1">Vasa email adresa</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" 
                    aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                    <button type="submit" class="btn btn-primary myBtn">Posalji</button>
                </form>
            </div>
        );
    }
}

export default ForgotenPassword;