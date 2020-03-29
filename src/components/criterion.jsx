import React from 'react';

export default class Criterion extends React.Component {
  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.checked, this.props.name);
  }

  render() {
    return (
      <input type="checkbox" checked={this.props.filters[this.props.name]} onChange={this.onChange} />
    );
  }
}