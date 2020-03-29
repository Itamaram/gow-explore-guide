import React, { Fragment } from 'react';
import Criterion from './criterion';

export default class CriteriaTable extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.onChange.apply(null, arguments);
  }

  getHeader() {
    const { cols } = this.props.criteria;

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
    let { cols } = this.props.criteria;

    cols = cols || [{ filter: '' }];

    return cols.map(c => (
      <div className="col-4">
        <Criterion filters={this.props.filters} name={`${c.filter}${row.filter}`} onChange={this.onChange} />
      </div>
    ));
  }

  getRows() {
    const { rows } = this.props.criteria;

    return rows.map(r => (
      <div className="row">
        <div className="col-4">{r.display || r.filter}</div>
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