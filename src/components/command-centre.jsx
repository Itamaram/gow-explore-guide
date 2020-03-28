import React from 'react';
import criteria from '../data/criteria.json'
import CriteriaTable from './criteria-table';

export default class CommandCentre extends React.Component {
  constructor(props) {
    super(props);

    const { filters } = this.props;

    this.onChange = this.onChange.bind(this);
    this.state = { filters };
  }

  onChange(checked, filter) {
    let filters = Object.assign(this.state.filters, {});
    filters[filter] = checked;
    this.props.onChange(filters);
  }

  render() {
    return (
      <div className="container">
        {criteria.map(c => (
          <CriteriaTable criteria={c} filters={this.state.filters} onChange={this.onChange} />
        )).reduce((x,y) => [x,(<hr />),y])}
      </div>
    );
  }
}
