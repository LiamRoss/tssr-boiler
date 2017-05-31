import * as React from 'react';
import { Component } from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

import '../stylesheets/World.scss';
import { Store } from '../store';
import { changeWorld } from '../actions/WorldActions';

interface OwnState {}
interface OwnProps {}
interface ConnectedState {
  name: string;
}
interface ConnectedDispatch {
  // tslint:disable-next-line:no-any
  change: (event: any) => void;
}

const mapStateToProps = (state: Store.All) => ({name: state.world.name});

const mapDispatchToProps = (dispatch: Redux.Dispatch<Store.All>) => ({
  // tslint:disable-next-line:no-any
  change: (event: any) => {
    dispatch(changeWorld(event.target.value));
  }
});

class World extends Component<OwnProps & ConnectedState & ConnectedDispatch, OwnState> {
  render() {
    return(
      <div className="World">
        <div className="world-title-wrapper">
          <div className="world-title">
            Hello {this.props.name}
          </div>
        </div>
        <div className="world-field">
          <input 
            className="world-input" 
            type="text" 
            onChange={this.props.change}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(World);