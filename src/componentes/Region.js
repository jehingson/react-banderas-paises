import React, {useContext } from 'react'
import styled from 'styled-components'
import {DataContext} from '../context/ContextProvider'


const RegionStyled = styled.select`
  padding: 1.3em;
  border: none;
  box-shadow: 0 2px 9px 0 rgba(0,0,0, .1);
  border-radius: 5px;
  outline: 0;
  width: 200px;
  
`
function Region() {
  const value = useContext(DataContext)
  const [region, setRegion] = value.region

 /**
   * Disptach filterByRegion action
   * 
   * @param {React.SyntheticEvent} selectEvent
   */

  const onRegionChange = (event) => {
    setRegion(event.target.value)
  }
  return (

      <RegionStyled  onChange={onRegionChange} value={region} >
        <option value="">Filtrar Continente</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </RegionStyled >

  )
}

export default Region