import React from 'react'
import styled from 'styled-components'
import Region from './Region'
import Buscador from './Buscador'

const FiltrosStyled = styled.div`
  
  .grid{
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  }
  @media (min-width: 768px){
    .grid{
    grid-template-columns: 480px 200px;
    justify-content: space-between;
    max-width: 1092px;
    margin: auto;
    }
  }
`

function Filtros() {
  return (
    <FiltrosStyled>
      <div className="grid">
      <Buscador />
      <Region />
      </div>
    </FiltrosStyled>
  )
}

export default Filtros