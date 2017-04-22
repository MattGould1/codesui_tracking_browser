import tracking from '../../src/codesui_tracking_browser';

describe('tracking', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(tracking, 'greet');
      tracking.greet();
    });

    it('should have been run once', () => {
      expect(tracking.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(tracking.greet).to.have.always.returned('hello');
    });
  });
});
