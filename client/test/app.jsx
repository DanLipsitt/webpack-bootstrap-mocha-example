import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
should = chai.should();
import App from '../components/App';

let shallowRenderer = TestUtils.createRenderer();

describe('App', function() {
  it('should render', function() {
    shallowRenderer.render(<App/>);
    let result = shallowRenderer.getRenderOutput();
    result.should.be.ok;
  });
});
