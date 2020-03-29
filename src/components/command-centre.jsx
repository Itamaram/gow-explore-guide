import React from 'react';
import criteria from '../data/criteria.json'
import CriteriaTable from './criteria-table';

export default class CommandCentre extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(checked, filter) {
    let filters = Object.assign(this.props.filters, {});
    filters[filter] = checked;
    this.props.onChange(filters);
  }

  render() {
    return (
      <div className="container">
        {criteria.map(c => (
          <CriteriaTable criteria={c} filters={this.props.filters} onChange={this.onChange} />
        )).reduce((x,y) => [x,(<hr />),y])}
      </div>
    );
  }
}
