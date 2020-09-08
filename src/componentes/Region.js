import React, {useContext } from 'react'
import styled from 'styled-components'
import {DataContext} from '../context/ContextProvider'


const RegionStyled = styled.div`

`
function Region() {
  const value = useContext(DataContext)
  const setRegion = value.region[1]
  const onRegionChange = (event) => {
    setRegion(event)
  }
  return (
    <>
    <RegionStyled >
      <div >
        <ul>
          <li 
          onClick={() => onRegionChange('Africa')}>Africa
          </li>
          <li 
          onClick={() => onRegionChange('Americas')}> Americas
          </li>
          <li 
          onClick={() => onRegionChange('Asia')}> Asia
          </li>
          <li 
          onClick={() => onRegionChange('Europe')}> Europe
          </li>
          <li 
          onClick={() => onRegionChange('Oceania')}> Oceania
          </li>
        </ul>
      </div>
    </RegionStyled>
    </>
  )
}

export default Region