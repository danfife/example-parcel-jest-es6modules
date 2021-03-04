import {MESSAGE} from '../src/hola';

describe('hola', () => {
  it('should have correct message', () => {
    expect(MESSAGE).toEqual('Hola, Mundo!');
  });
})