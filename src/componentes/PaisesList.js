import React from 'react'
import styled from 'styled-components'
import Banderas from './Banderas'
import Filtros from "./Filtros";
const PaisesListStyled = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 1rem;
`

function PaisesList() {
  
  return (
      
    <PaisesListStyled>
      <Filtros />
      <Banderas />
    </PaisesListStyled>
  )
}

export default PaisesList