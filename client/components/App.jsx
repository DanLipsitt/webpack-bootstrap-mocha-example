import React from 'react';
import 'bootstrap-webpack';
import {Glyphicon} from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <p><Glyphicon glyph="star"/> Hello!</p>
    );
  }
};
