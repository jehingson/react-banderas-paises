import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { DataContext } from "../context/ContextProvider";
const BuscadorStyled = styled.label`
box-sizing: border-box;
display: inline-flex;
background: var(--white);
align-items:center;
box-shadow: 0 2px 9px 0 rgba(0,0,0, .1);
padding: 0 2rem;
border-radius: 5px;
width: 100%;
i{
margin-right: 1em;
color: #c4c4c4;
}
input{
flex:1;
height: 48px;
line-height: 48px;
border: none;    
padding:0 2rem;
font-size: .7em;
outline: 0;
position: relative;
color: var(--black);
background: var(--white);
}
input::-webkit-input-placeholder{
    color: #c4c4c4;
}
.close{
  position: absolute;
  right: 2em;
  width:10px; 
  padding: 0;
  border: none;
  background: var(--white);
}
@media (min-width: 767px){
  .close{
    right: 42rem;
    padding: 0;
  }
}
`

function Buscador() {
  const value = useContext(DataContext)
  const [buscador, setBuscador] = value.buscador
  const [inputValue, setInputValue] = useState('')

  function handlerBuscar(event) {
    setBuscador(event.target.value)
  }
  const clearInput = () => {
    setBuscador('')
    setInputValue('')
  }

  return (
    <BuscadorStyled>
      {
       buscador &&
        <button className="close"
          onClick={clearInput}
        ><i className="fas fa-times"></i></button>
      }
      <i className="fas fa-search" />
      <input
        placeholder="buscar paises"
        type="text"
        value={buscador}
        onChange={handlerBuscar}
      />
    </BuscadorStyled>
  )
}

export default Buscador