import Component from './Component';

export default class SubClass extends Component {
  render() {
    const number = 2387123723723.3223823;
    return this.formatToBRL(number);
  }
}
