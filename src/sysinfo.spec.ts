import si from './sysinfo';

describe('typeScript test suite', () => {
  it('should return the information of te cpu"', () => {
    expect.assertions(1);
    expect(si).toHaveProperty('cpu');
  });
});




