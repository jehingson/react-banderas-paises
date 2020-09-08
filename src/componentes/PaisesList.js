import React, {useContext} from 'react'
import styled from 'styled-components'
import Paises from './Paises'
import {DataContext} from '../context/ContextProvider'
import Region from './Region'
import Buscador from './Buscador'

const PaisesListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  border: 1px solid red;
  background: var(--background);
  padding: 4em 2em;
`

function PaisesList() {
  const value = useContext(DataContext)
  const paisesList = value.paises[0]

  return (
    <PaisesListStyled>

      <Buscador />
      
      <Region />

      { 
        paisesList.map(({flag, name, population, region, capital, numericCode}) => {
          return (
          <Paises
          numericCode={numericCode}
          key={numericCode}
          bandera={flag}
          name={name}
          poblacion={population}
          region={region}
          capital={capital}

        />
        )
        })
      }
    </PaisesListStyled>
  )
}

export default PaisesList