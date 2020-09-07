import React from 'react'
import styled from 'styled-components'
import Paises from './Paises'

const PaisesListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  border: 1px solid red;
  background: var(--background);
  padding: 4em 2em;
`

function PaisesList() {
  return (
    <PaisesListStyled>
      <Paises
        bandera="https://raw.githubusercontent.com/jehingson/react-project-flag/master/codigos/leonidas/my-flag/public/Bandera_venezuela.jpg"
        name="Venezuela"
        poblacion={12321321}
        region="Sur America"
        capital="Caracas"
      />
      <Paises
        bandera="https://raw.githubusercontent.com/jehingson/react-project-flag/master/codigos/leonidas/my-flag/public/Bandera_venezuela.jpg"
        name="Venezuela"
        poblacion={12321321}
        region="Sur America"
        capital="Caracas"
      />
      <Paises
        bandera="https://raw.githubusercontent.com/jehingson/react-project-flag/master/codigos/leonidas/my-flag/public/Bandera_venezuela.jpg"
        name="Venezuela"
        poblacion={12321321}
        region="Sur America"
        capital="Caracas"
      />
      
    </PaisesListStyled>
  )
}

export default PaisesList