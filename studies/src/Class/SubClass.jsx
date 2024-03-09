import Component from './Component';
import styled from 'styled-components';

const Box = styled.div`
  width: 200px;
  height: 200px;

  background-color: red;

  margin: auto;
`

const Text = styled.p`
  color: #FFF;
`

export default class SubClass extends Component {
  render() {
    const { number } = this.props;
    return <Box>
      <Text>{this.formatToBRL(number)}</Text>
    </Box> 
  }
}
