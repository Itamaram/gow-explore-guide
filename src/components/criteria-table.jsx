import React, { Fragment } from 'react';
import Criterion from './criterion';

export default class CriteriaTable extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.apply(null, arguments);
  }

  getHeader() {
    const { cols } = this.props;

    if (!cols)
      return;

    return (
      <div className="row">
        <div className="col"></div>
        {cols.map(c => (
          <div className="col">{c.display || c.filter}</div>
        ))}
      </div>
    )
  }

  getRowCells(row) {
    let { cols } = this.props;

    cols = cols || [{ filter: '' }];

    return cols.map(c => (
      <div className="col">
        <Criterion filters={this.props.filters} name={`${c.filter}${row.filter}`} onToggle={this.onChange} />)
      </div>
    ));
  }

  getRows() {
    const { rows } = this.props;

    return rows.map(r => (
      <div className="row">
        <div className="col">{r.display || r.filter}</div>
        {this.getRowCells(r)}
      </div>
    ));
  }

  render() {
    return (
      <Fragment>
        {this.getHeader()}
        {this.getRows()}
      </Fragment>
    );
  }
}