import { CircuitLocalityPipe } from './circuit-locality.pipe';
import { Circuit } from '../models/circuit.model';
import { Location } from '../models/location.model';

describe('CircuitLocalityPipe', () => {

  let pipe;

  beforeEach(() => {
    pipe = new CircuitLocalityPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return city and country if Location propery is provided', () => {

    const location = new Location();
    location.locality = 'Sofia';
    location.country = 'Bulgaria';

    const circuit = new Circuit();
    circuit.Location = location;

    expect(pipe.transform(circuit)).toEqual('Sofia, Bulgaria');
  });

  it('should return null if no Location property is provided', () => {
    const circuit = new Circuit();
    expect(pipe.transform(circuit)).toBeNull();
  });
});
