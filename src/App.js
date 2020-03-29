import React from 'react';
import './App.css';
import KingdomTable from './components/kingdom-table';
import CommandCentre from './components/command-centre';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = { filters: {} };
  }

  onChange(filters) {
    this.setState({ filters });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <CommandCentre onChange={this.onChange} filters={this.state.filters} />
          </div>
          <div className="col-12 col-sm-6">
            <KingdomTable filters={this.state.filters} />
          </div>
        </div>
      </div>
    );
  }
}