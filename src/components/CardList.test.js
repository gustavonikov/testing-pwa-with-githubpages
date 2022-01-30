import { shallow } from 'enzyme';
import CardList from './CardList';

it('renders CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: 'Snow',
      email: "jsnow@teste.com"
    }
  ]

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})
