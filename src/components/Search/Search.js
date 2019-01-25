import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import ImageResults from '../Image-results/ImageResults';

class Search extends Component {
    state={
        searchText:'',
        amount:15,
        apiURL:'https://pixabay.com/api/',
        apiKey:'11398838-8755505e87f78d4208d924368',
        images:[]
    }

    onTextChange =(e)=>{
        this.setState({[e.target.name]:e.target.value},()=>{
            axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}
            &image_type=photo&per_page=${this.state.amount}&safesearch=true`).then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
        });
    }

    onAmountChange=(e,index,value)=>{
        this.setState({amount:value});
    }

    render() {
        console.log(this.state.images)
        return (
            <div>
                   <InputLabel htmlFor="searchText">IZABERI SLIKU</InputLabel>
                <TextField 
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                  //  floatinglabeltext="Search for images"
                    fullWidth={true}
                    variant="filled"
                />
                <br/>
                <InputLabel htmlFor="amount">Koliko hoces slika?</InputLabel>
                <Select
                 name="amount"
                 floatinglabeltext="amount"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
                >
                    <MenuItem value={5}  >5</MenuItem>
                    <MenuItem value={10} >10</MenuItem>
                    <MenuItem value={15} >15</MenuItem>
                    <MenuItem value={30} >30</MenuItem>
                    <MenuItem value={50} >50</MenuItem>
                </Select>
                <br/>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />):'something'}
            </div>
        );
    }
}

export default Search;