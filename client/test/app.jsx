import chai from 'chai';
should = chai.should();
import App from '../components/App';

describe('App', function() {
  it('should render', function() {
    let x = 1;
    x.should.equal(1);
  });
});
