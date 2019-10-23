import { MergeObjectPipe } from './merge-object.pipe';

describe('MergeObjectPipe', () => {
  let pipe: MergeObjectPipe;
  beforeEach(() => {
    pipe = new MergeObjectPipe();
  });
  describe('transform', () => {
    it('merge an object', () => {
      expect(pipe.transform({ current: 'val' }, 'testKey', 'newValue')).toEqual(
        {
          current: 'val',
          testKey: 'newValue'
        }
      );
    });
  });
});
