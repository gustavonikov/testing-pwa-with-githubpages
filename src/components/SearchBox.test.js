import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('renders SearchBox component', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot()
})
