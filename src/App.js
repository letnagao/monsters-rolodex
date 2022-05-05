import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12341',
        },
        {
          name: 'Frank',
          id: '12341e',
        },
        {
          name: 'Jacky',
          id: '12341r',
        },
        {
          name: 'Andrei',
          id: '12341re',
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
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
