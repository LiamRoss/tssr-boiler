import * as React from 'react';
import { Component } from 'react';

import World from './World';
import '../stylesheets/App.scss';

interface OwnState {}
interface OwnProps {}
interface ConnectedState {}     // will be used in mapStateToProps
interface ConnectedDispatch {}  // will be used in mapDispatchToProps

class App extends Component<OwnProps & ConnectedState & ConnectedDispatch, OwnState> {
  render() {
    return (
      <div className="App">
        <World />
      </div>
    );
  }
}

export default App;
