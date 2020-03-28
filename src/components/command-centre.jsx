import React, { Fragment } from 'react';
import Criterion from './filter';

export default class CommandCentre extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = { filters: [] };
  }

  onChange(checked, filter) {
    const action = checked ? fs => fs.concat(filter) : fs => fs.filter(k => k !== filter);
    this.setState(prev => ({ filters: action(prev.filters) }), () => this.props.onChange(this.state.filters));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">Summons</div>
          <div className="col">
            <Criterion filters={this.state.filters} name="CanSummon" onToggle={this.onChange} />
          </div>
          <div className="col"></div>
        </div>
        <hr />
        <div className="row">
          <div className="col"></div>
          <div className="col">Magic</div>
          <div className="col">Skulls</div>
        </div>
        <div className="row">
          <div className="col">Resists</div>
          <div className="col">
            <Criterion filters={this.state.filters} name="MagicResistance" onToggle={this.onChange} />
          </div>
          <div className="col">
            <Criterion filters={this.state.filters} name="SkullResistance" onToggle={this.onChange} />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">Status</div>
          <div className="col">Causes</div>
          <div className="col">Immune</div>
        </div>
        {
          [
            'Entangle',      'Burning', 'Poison',    'Silence',   'HuntersMark',
            'SpellDisabled', 'Barrier', 'Frozen',    'DeathMark', 'Disease',
            'Stun',          'Web',     'Enchanted', 'Enraged',   'Submerged',
            'FaerieFire',    'Blessed', 'Cursed',    'Bleed',     'Mirror'
          ].map(se => (
            <Fragment>
              <div className="row">
                <div className="col">{se}</div>
                <div className="col">
                  <Criterion filters={this.state.filters} name={`Causes${se}`} onToggle={this.onChange} />
                </div>
                <div className="col">
                  <Criterion filters={this.state.filters} name={`ImmuneTo${se}`} onToggle={this.onChange} />
                </div>
              </div>
            </Fragment>
          ))
        }
      </div>
    );
  }
}
