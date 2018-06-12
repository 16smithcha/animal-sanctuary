import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import SearchBar from './components/SearchBar.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      term: '',
      animals: [],
      animal: [],
      id: '',
      i: ''
    }
  }

  handleTermChange = (term) => {
    axios.get('http://localhost:3000/animals/' + term)
    .then((response) => {
      this.setState({ results: term })
    })
    console.log(term.toString());
  }

  addAnimal = (term, animals) => {
    axios({
      method: 'POST',
      url: 'http://localhost:3000/animals' + term,
      data: { animalName: this.state.animal.name }
    })
    console.log(term.toString());
  }

  loadAnimals = (animals) => {
      axios.get('http://localhost:3000/animals')
      .then((response) => {
        console.log('loaded animals', response.data)
        this.setState({ animals: response.data})
      })
      for (this.i = 0; this.i < animals.length; this.i++){
        this.setState({animal: animals[this.i]})
        return(<img src={this.animal[this.i].imageUrl} />,
        <p>this.animalName</p>);
      }
    }

  deleteAnimal = (term) => {
    axios({
      method: 'DELETE',
      url: 'http://localhost:3001/animals',
    })
    console.log(term.toString());
  }

  componentDidMount() {
    console.log(200)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Animal Sanctuary Network</h1>
        </header>
        <div>
          <p> Search Animals </p>
          <SearchBar className="SearchBar" onTermChange={this.handleTermChange} />
          <p> Add Animal </p>
          <input className="SearchBar" onTermChange={this.addAnimal} />
          <div>
            <button onClick={this.loadAnimals}> Load Animals </button>
            {this.state.animals.map(item => {
                      return( <li><img src={this.state.animal[this.id].imageUrl} />
                      console.log("state.animal", {this.state.animal[this.id]})
                      <p>{this.state.animal[this.id].name}</p>
                      <p>{this.state.animal[this.id].id}</p></li>)
                      })}
                      <button onClick={this.deleteAnimal}> Delete Animals </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
