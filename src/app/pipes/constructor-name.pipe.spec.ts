import { ConstructorNamePipe } from './constructor-name.pipe';
import { Constructor } from '../models/constructor.model';

describe('ConstructorNamePipe', () => {

  let pipe;

  beforeEach(() => {
    pipe = new ConstructorNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return constructor name from object of type Constructor', () => {
    const constructorMock = new Constructor();
    constructorMock.name = 'Mercedes';

    expect(pipe.transform(constructorMock)).toEqual('Mercedes');
  });

  it('should return constructor names, separated with comma, when an array of Constructor object is provided', () => {

    const constructorMock1 = new Constructor();
    constructorMock1.name = 'Mercedes';

    const constructorMock2 = new Constructor();
    constructorMock2.name = 'Red Bull';

    expect(pipe.transform([constructorMock1, constructorMock2])).toEqual('Mercedes, Red Bull');

  });
});
