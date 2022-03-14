import React, { Component } from 'react'
import styled from 'styled-components'

const Scontainer  = styled.div `
                    border: 2px solid red;
                    text-align: center;

`
const Sh2 = styled.div `
        color: ;
        font-family: monospace;
        
`
const Simg = styled.img `
    widrh: 50px;
    heigth:70px;
    
        
`

export default class Component1 extends Component {
  render() {
    return (
      <div>
          <Simg src='https://res.cloudinary.com/lau2401/image/upload/v1647298853/samples/261456096_10159389408970822_1149284521859380985_n_hgh4ys.jpg'/>
          <Sh2>Laura Marcela
        <br />Bermudez Gonzalez</Sh2>
        <Sh2>Desarrolladora Front End</Sh2>
      </div>
    )
  }
}
