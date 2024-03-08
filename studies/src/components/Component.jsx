import React from 'react';

export default class Component extends React.Component {
  formatToBRL = (number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  render() {
    return <div>Hello class by sub</div>;
  }
}