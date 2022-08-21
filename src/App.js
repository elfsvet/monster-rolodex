import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
// component ui representation of
class App extends Component {
  // this is function that returning the html code
  // constructor call - runs first
  constructor() {
    super();

    this.state = {
      // initialize a state
      monsters: [],
      searchField: '',
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
        // after setState called render rerender the page again
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  // method
  // render - runs second what to show initial ui mount on the DOM
  // method initialized
  onSearchChange = (e) => {
    // filter true and false filter
    const searchField = e.target.value.toLowerCase();
    this.setState(
      () => {
        return { searchField };
      }
    );
  };

  render() {
    console.log('render from app');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      //  if the name includes the search string return the monster to the array
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
      <SearchBox onChangeHandler={this.onSearchChange} placeholder={'search monsters'} className={'search-box'}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
