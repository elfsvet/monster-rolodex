import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// component ui representation of
class App extends Component {
  // this is function that returning the html code
  // constructor call - runs first
  constructor() {
    super();

    this.state = {
      // initialize a state
      monsters: [],
      sarchedField: '',
    };
    console.log('constructor initial state');
  }
  // life cycle methods runs third
  // did mount it runs

  componentDidMount() {
    console.log('component Did Mount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        // after setState called render rerender the page
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  // render - runs second what to show initial ui mount on the DOM
  filterMonsters(element) {
    return console.log(this.state.monsters.includes('l'));
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      //  if the name includes the search string return the monster to the array
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            // filter true and false filter
            const searchField = e.target.value.toLowerCase();
            this.setState(
              () => {
                return { searchField };
              },
              () => {}
            );
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
