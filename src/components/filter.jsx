//import PropTypes from 'prop-types';
import React from 'react';

export default class Criterion extends React.Component {
  constructor(props) {
    super(props);

    const { filters, name } = props;

    this.onChange = this.onChange.bind(this);
    this.state = { isSelected: filters.includes(name) };
  }

  onChange(e) {
    const { isSelected } = this.state;
    const { name } = this.props;
    this.setState({isSelected: !isSelected})
    this.props.onToggle(!isSelected, name)
  }

  render() {
    return (
      <input type="checkbox" checked={this.state.isSelected} onChange={this.onChange} />
    );
  }
}

// AccountPicker.propTypes = {
//   accounts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.int,
//       inviteCode: PropTypes.string,
//     }),
//   ).isRequired,
//   callback: PropTypes.func.isRequired,
// };
