import React, { Component } from 'react';
import styled from 'styled-components' ;
import Component1 from '../components/Component1';

const DivStyled = styled.div`
        background-color: azul;

`
 

export default class Container extends Component {
  render() {
    return (
      <DivStyled>
          <Component1/>
      </DivStyled>
    )
  }
}
