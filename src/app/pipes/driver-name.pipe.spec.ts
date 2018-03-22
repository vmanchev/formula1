import { DriverNamePipe } from './driver-name.pipe';
import { Driver } from '../models/driver.model';

describe('DriverNamePipe', () => {

  let pipe;

  beforeEach(() => {
    pipe = new DriverNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a string of driver first and last names', () => {
    const driverMock = new Driver();
    driverMock.givenName = 'John';
    driverMock.familyName = 'Doe';

    expect(pipe.transform(driverMock)).toEqual('John Doe');
  });
});
