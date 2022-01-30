import { shallow } from 'enzyme';
import Card from './Card';

it('renders Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})
