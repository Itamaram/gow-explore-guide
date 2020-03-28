import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Criterion from './components/filter';
import KingdomTable from './components/kingdom-table';
import CommandCentre from './components/command-centre';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = { filters: [] };
  }

  onChange(filters) {
    this.setState({ filters });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <CommandCentre onChange={this.onChange} />
          </div>
          <div className="col">
            <KingdomTable filters={this.state.filters} />
          </div>
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //     <Button>Some test here</Button>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //   </a>
      //   </header>
      // </div>
    );
  }
}