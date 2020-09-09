import React from 'react'
import {
  useHistory
} from "react-router-dom"
import styled from 'styled-components'

const PaisesStyled = styled.div`
  text-align: left;
  border-radius: 5px;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, .1);
  cursor: pointer;
  background: var(--white);
  &:hover .datos{
    
    border: 1px solid var(--black);
    border-radius: 0 0 5px 5px;
    border-top: none;
  }
  
  img{
    width: 100%;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px 5px 0 0;
  }
  .datos{
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: .3s border;
    color: var(--black);
  }
  h2{
    margin: 0;
    margin-bottom: 1rem;
    font-size: 20px;
    font-weight:700;
  }
  p{
    font-size: .9em;
    margin-bottom: .5rem;
  }
`

function Paises({
  bandera,
  name,
  poblacion,
  region,
  capital,
  numericCode,
}) {

  const history = useHistory()

  function handleClieck(){
    history.push(`/pais/${
      numericCode}`)
  }

  return (
    <PaisesStyled onClick={handleClieck}>
      <img loading="lazy" src={bandera} alt={name} />
      <div className="datos">
      <h2>{name}</h2>
      <p><strong>Poblacion:</strong> {poblacion}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Capital:</strong> {capital}</p>
      </div>
    </PaisesStyled>
  )
}

export default Paises

/*
import React from 'react'
import styled from 'styled-components'


const PaisesStyled = styled.div`

`

function Paises(){
    return(
        <PaisesStyled>
            Paises
        </PaisesStyled>
    )
}

export default Paises */