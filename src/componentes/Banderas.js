import React, {useContext} from 'react'
import styled from 'styled-components'
import {DataContext} from '../context/ContextProvider'
import Paises from './Paises'
const BanderasStyled = styled.div`
display: grid;
grid-row-gap: 2.3em;
justify-content: center;
background: var(--background);
padding: 4em 1em;
`

function Banderas() {
  const value = useContext(DataContext)
  const paisesList = value.paises[0]
  return (
    <BanderasStyled>
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
    </BanderasStyled>
  )
}

export default Banderas