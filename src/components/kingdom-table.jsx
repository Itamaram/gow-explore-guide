import React from 'react';
import _ from 'lodash';
import kingdoms from '../data/kingdoms.json';

export default class KingdomTable extends React.Component {
  getRows() {
    const { filters } = this.props;
    return _.sortBy(kingdoms.map(k => this.getRow(k, filters)), [
      r => -r.compatibility,
      r => r.name
    ]);
  }

  getRow(kingdom, filters) {
    const filtered = kingdom.Troops.filter(t => t.Attributes.some(a => filters[a.Name]));

    return {
      compatibility: (kingdom.Troops.length - filtered.length) / kingdom.Troops.length,
      name: kingdom.Name
    }
  }

  getRowStyle(compatibility) {
    const c = (x, y) => Math.ceil((y - x) * compatibility + x);
    return {
      backgroundColor: `rgb(${c(255, 0)}, ${c(0, 255)}, 0)`
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">Compatibility</div>
          <div className="col">Kingdom</div>
        </div>
        {this.getRows().map(r => (
          <div className="row" style={this.getRowStyle(r.compatibility)}>
            <div className="col">{(r.compatibility * 100).toFixed(2)}%</div>
            <div className="col">{r.name}</div>
          </div>
        ))}
      </div>
    );
  }
}