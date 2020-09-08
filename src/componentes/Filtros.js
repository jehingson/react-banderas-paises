import React from 'react'
import styled from 'styled-components'
import Region from './Region'
import Buscador from './Buscador'

const FiltrosStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
`

function Filtros() {
  return (
    <FiltrosStyled>
      <Buscador />
      <Region />
    </FiltrosStyled>
  )
}

export default Filtros